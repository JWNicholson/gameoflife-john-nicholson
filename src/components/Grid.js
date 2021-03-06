import React, { useState, useEffect, useRef } from "react";
import Footer from './Footer'
import GridStyles from "./styles/gridStyles";
import { Button, ButtonGroup,ButtonToolbar,Row, Col, } from 'reactstrap';


// Set the map coordinates patter is allowed to travel
const patternarea = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

//grid size
let rows = 35;
let cols = 35;


// build a grid
const newBoard = () => {
  const clearedGrid = [];
  for (let i = 0; i < rows; i++) {
    clearedGrid.push(Array.from(Array(cols), () => 0));
  }
  return clearedGrid;
};

// Start with an empty grid
const gameRules = (g) => {
  let newGrid = newBoard();
  // loop through the neighboring cells by the size.sizerows and cols .
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let neighbors = 0;
      patternarea.forEach(([x, y]) => {
        const blockX = i + x;
        const blockY = j + y;
        if (blockX >= 0 && blockX < rows && blockY >= 0 && blockY < cols) {
          neighbors += g[blockX][blockY];
        }
      });

      //set up rules for cell movement
      if (neighbors < 2 || neighbors > 3) {
        newGrid[i][j] = 0;
      } else if (g[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
        newGrid[i][j] = 1;
      } else if (g[i][j] === 0 && neighbors === 3) {
        newGrid[i][j] = 1;
      }
    }
  }

  return newGrid;
};

const Grid = () => {
  //Initial grid state one which sets up double buffering
  const [frameOne, setFrameOne] = useState(() => {
    return newBoard();
  });

  const frameOneRef = useRef(frameOne);
  frameOneRef.current = frameOne;

  // Initial grid state two (to set up double buffering)
  const [frameTwo, setFrameTwo] = useState(() => {
    return newBoard();
  });

  // Use state to check if game is running by initial state to false
  const [running, setRunning] = useState(false);

  // Check which grid is active
  const [activeFrame, setActiveFrame] = useState(1);

  // Generation counter
  const [genCount, setGenCount] = useState(0);

  // Default speed
  const [speed, setSpeed] = useState(500);

  // set speed reference 
  const speedRef = useRef(speed);
  speedRef.current = speed;

  // Double buffer --
  //  when the active grid is 1, set frameOne's state in the gameRules function. 
  //Then set that into frameTwo. 
  //Else, if frameTwo is active set it in the gameRules
  //Put that in frameOne's state. This gets it ready to be handed off
  //This is also where the generation Counter is located
  const nextGen = () => {
    setGenCount(genCount + 1);
    if (activeFrame === 1) {
      setFrameTwo(gameRules(frameOne));
      setActiveFrame(2);
    } else {
      setFrameOne(gameRules(frameTwo));
      setActiveFrame(1);
    }
  };

  // Set a variable of grid to the activeFrame state. 
  //Is the grid is active? If True, it will be active on frameOne or frameTwo
  const grid = activeFrame === 1 ? frameOne : frameTwo;

  //Game logic 
  useEffect(() => {
    let gameEngine = null;
    if (activeFrame && running) {
      gameEngine = setInterval(
        () => {
          nextGen();
        },
        speedRef.current,
        frameOneRef.current
      );
    } else if (!running) {
      clearInterval(gameEngine);
      return;
    }
    return () => clearInterval(gameEngine);
  }, [activeFrame, running]);

  return (
    <div className="wrapper">
     
     
      <GridStyles>
      <div className="grid-header">
      <h1>Conway's Game Of Life</h1>

      
      </div>
      <div className="game-rules">
      <p>1. Any live cell with fewer than 2 live neighbors dies from underpopulation.</p>
      <p>2. Any live cell with more than 3 neighbors dies due to overpopulation.</p>
      <p>3. Any live cell with 2 or 3 neighbors lives, and is unchanged for that generation.</p>
      <p>4. Any dead cell with exactly 3 neighbors comes to life.</p>
      </div>
        <div
          className="grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 20px)`,
          }}
        >

          {grid.map((row, i) =>
            row.map((col, j) => (
              <div
                className={grid[i][j] ? "grid-cells" : ""}
                key={`${i}-${j}`}
                onClick={() => {
                  if (running) {
                    return;
                  }
                  const newGrid = Array.from(grid);
                  newGrid[i][j] = grid[i][j] ? 0 : 1;
                  if (activeFrame === 1) {
                    setFrameOne(newGrid);
                  } else {
                    setFrameTwo(newGrid);
                  }
                }}
                style={{
                  width: 18,
                  height: 18,
               
                  border: "solid 1px black",
                }}
              />
            ))
          )}
        </div>

        <div className="counter-container">
        <h2 className="count">Generation Count: {genCount}</h2>
        </div>
        <Row className="instruction-container">
          <Col>
            <h4>How to play</h4>
          <p>Click individual cells to make your own pattern or use one of the buttons below. Then click Start. When the simulation is running, using the buttons you can speed it up or slow it down. To slow it down the first time you must speed it up first. To see one generation at a time, while the sim is running, hit the stop button, then you can use the One Step button. To start fresh, use the clear button.</p>
          </Col>

       
      
         
      </Row>
        

        <div className="button-container">

        <div className="shape-buttons-container">
        <Button 
        color="warning"
        onClick={() => {
          setRunning(!running);
        }}
      title="stop start">
        {running ? "Stop" : "Start"}
        </Button>

        <Button 
        color="info"
         onClick={() => {
          if (running) {
            setRunning(!running);
          }
          setFrameOne(newBoard());
          setFrameTwo(newBoard());
          setGenCount(0);
        }}
      title="clear">
       Clear
        </Button>
       
        <ButtonToolbar>
      <ButtonGroup>
        <Button
        color="danger"
         onClick={() => {
          const newGrid = Array.from(grid);
          newGrid[16][16] = 1;
          newGrid[17][16] = 1;
          newGrid[17][15] = 1;
          newGrid[18][14] = 1;
          newGrid[19][15] = 1;
          newGrid[19][16] = 1;
          newGrid[18][17] = 1;

          if (activeFrame === 1) {
            setFrameOne(newGrid);
          } else {
            setFrameTwo(newGrid);
          }
        }}
        >Beehive</Button>
        <Button
        color="danger"
        onClick={() => {
          const newGrid = Array.from(grid);
          newGrid[11][20] = 1;
          newGrid[14][16] = 1;
          newGrid[15][19] = 1;
          newGrid[15][18] = 1;
          newGrid[15][17] = 1;
          newGrid[15][16] = 1;
          newGrid[14][16] = 1;
          newGrid[13][16] = 1;
          newGrid[12][17] = 1;
          newGrid[14][20] = 1;
          if (activeFrame === 1) {
            setFrameOne(newGrid);
          } else {
            setFrameTwo(newGrid);
          }
        }}
        >Spaceship</Button>
        <Button
        color="danger"
         onClick={() => {
          const clearedGrid = [];
          for (let i = 0; i < rows; i++) {
            clearedGrid.push(
              Array.from(Array(cols), () => (Math.random() > 0.5 ? 1 : 0))
            );
          }
          if (activeFrame === 1) {
            setFrameOne(clearedGrid);
          } else {
            setFrameTwo(clearedGrid);
          }
        }}
        >Random</Button>
        
      </ButtonGroup>
     
    </ButtonToolbar>
         
  <div>
</div>
      

    <ButtonGroup>
      <Button
      color="primary"
      onClick={() => {
        setSpeed(1000);
      }}
      >Slower</Button>

      <Button
      color="primary"
        onClick={() => {
          setSpeed(50);
        }}
      >Faster</Button>

      <Button
      color="primary"
      onClick={() => {
        nextGen();
      }}
      >One Step</Button>

    </ButtonGroup>

          </div>
        </div>
       
      </GridStyles>
      <Footer />
    </div>
  );
};

export default Grid;
