# Cellular Automata and Conway's "Game of Life"

 This is an interactive program that simulates a cellular automation.
 You will watch the cells evolve, live or die, based on a set of rules.
The game board has start, stop, pause, and step through controls
Double buffering of game board data was used to calculate the next generation of cells.


![app-example](https://github.com/JWNicholson/gameoflife-john-nicholson/blob/master/jwn-game-of-life_600.jpg?raw=true)

# What is it again?
In 1970, Britsh mathematition John Conway developed a demonstration of cellular automation. 
It's not actually a game,as there are no players. You interact with it by creating a configuration
of cells a.k.a squares, or dots, on a x,y grid. It requires no more user input, but instead uses a set of rules 
to determine if a cell lives and is inclded in the next calculation, or dies and disappears.

# The rules are:
1. Any live cell with 2 or 3 neighbors survives

2. Any dead cell with 3 live neighbors becomes a live cell

3. Any other live cells die in the next generation, and all other dead cells remain dead

You can read more about it here. https://rb.gy/rceopt

# Example Code
```
      //set up rules for cell movement
      if (neighbors < 2 || neighbors > 3) {
        newGrid[i][j] = 0;
      } else if (g[i][j] === 1 && (neighbors === 2 || neighbors === 3)) {
        newGrid[i][j] = 1;
      } else if (g[i][j] === 0 && neighbors === 3) {
        newGrid[i][j] = 1;
      }
    }
  ```
 # Build Status
 Finished
 
 # Tech Stack Used
* React js - https://reactjs.org/docs/getting-started.html

* Create React - App https://github.com/facebook/create-react-app

* Create React App's built in environment variables to protect the API from being loaded to this respository.

<h3>React Dependencies Added</h3>

* Axios js for the API call.- https://github.com/axios/axios

* Reactstrap for styling - https://reactstrap.github.io/

* React Router to navigate between pages - https://reactrouter.com/

# Try it out
Fork this project or download a copy. When its where you want it on your machine, unzip and run "npm install".
