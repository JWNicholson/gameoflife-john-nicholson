import React, { Component } from 'react';
import './App.css';
import {
  fireworks,
  flower,
  gosperGun,
  cellData
} from './defaults/defaults'
import Grid from './components/Grid';


export default class App extends Component {
//constructor
constructor(props){
  super(props)
  this.state = {
    cellData,
    rewind: null,
    isSimulating: false,
    interval: null,
    curGeneration: 0,
    frameID:"",
    simError:false,
    speed: "150",
    preset: null
  }
}

//start animation
startAnimation = () => {
  if (this.state.curGeneration == 0) {
    let rewind = this.state.cellData.slice();
    this.setState({
      rewind
    });
  }
  let nextState = this.createFrame(this.state.cellData);
  let interval = setInterval(() => {
    this.setState(
      curState => ({
        cellData: nextState,
        curGeneration: ++curState.curGeneration
      }),
      () => {
        nextState = this.createFrame(this.state.cellData);
      }
    );
  }, parseInt(this.state.speed, 10));
  this.setState({
    isSimulating: true,
    interval
  });
};
//stop animation
  stopAnimation = () => {
    clearInterval(this.state.interval)
    this.setState({
      isSimulating: false,
      interval: null
    })
  }

// fastforward
  //state

//rewind
  //state

//create cell frames
createFrame = neighborData => {
  let game = neighborData.map((cell, index) => {
    let neighborCount = 0;

    //Check and track all neighbors of this cell
    // use modulus to make not to check next and previous rows 
    if((index -1) % 60 !==0 && neighborCount[index - 61]){
      //check north west 
      neighborCount ++
    }
    if (neighborCount[index - 60]) {
      // check upper center 
      neighborCount++;
    }
    if (index % 60 !== 0 && neighborCount[index - 59]) {
      // check north east
      neighborCount++;
    }
    if ((index - 1) % 60 !== 0 && neighborCount[index - 1]) {
      // check west
      neighborCount++;
    }
    if ((index === 0 || index % 60 !== 0) && neighborCount[index + 1]) {
      // check east
      neighborCount++;
    }
    if ((index - 1) % 60 !== 0 && neighborCount[index + 59]) {
      // check south west
      neighborCount++;
    }
    if (neighborCount[index + 60]) {
      // check lower center
      neighborCount++;
    }
    if (index % 50 !== 0 && neighborData[index + 61]) {
      // Lower Right Neighbor
      neighborCount++;
    }
    if (neighborData[index]) {
       // Live cell with fewer than two live neighbors dies
      // Live cell with more than three live neighbors dies
      if (neighborCount < 2 || neighborCount > 3) {
        return false;
      } else {
        // Live cell with two or three live neighbors lives
        return true;
      }
    } else {
      // Dead cell with exactly three live neighbors comes alive
      if (neighborCount === 3) {
        return true;
      } else {
        return false;
      }
    }
  })
  return game
}

//cell styling
clickCell = i => {
  if (!this.state.isSimulating) {
    if (this.state.curGeneration) {
      this.setState({
        curGeneration: 0
      });
    }
    const changedState = this.state.cellData.slice();
    changedState[i] = !changedState[i];
    this.setState({
      cellData: changedState
    });
  }
};

//clear board
  clearBoard = () => {
    if(!this.state.isSimulating){
      this.setState({
        cellData,
        curGeneration: 0
      })
    }
  }

//change handlers

//handleChanges()
handleChanges = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

//handleChangesStartPattern()
handleChangesStartPattern = e => {
  this.setState({
    [e.target.name]: e.target.value
  }, () => {this.submitPreset()});
};

//submitStartPattern(
// set state for chosen pattern (fireworks,flower, gosperGun)
submitPreset = e => {
  if (this.state.preset === "cellData") {
    this.setState({
      cellData,
      curGeneration: 0
    })
  }
  
  if (this.state.preset === "gosperGun") {
    this.setState({
      cellData: gosperGun,
      curGeneration: 0
    })
  }

  if (this.state.preset == "flower") {
    this.setState({
      cellData: flower,
      curGeneration: 0
    })
  }
}




  render() {
    return (
    
<div className="App">
<header className="App-header">
  <h1>Conways Game of Life</h1>
  <p>
    My explanation
  </p>
  
  </header>
 <div className="gameContainer">
  <p>gameContainer uses state</p>
  <p>Current Generation number goes here (uses state)</p>
   Control Buttons
 </div>
     <ul>
       <li>Grid</li>
       <li>Rules</li>
       <li>content</li>
       <li>footer</li>
     </ul>
 
 
 
</div>
    )
  }
}
