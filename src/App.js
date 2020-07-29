import React, { Component } from 'react'
import Grid from './components/Grid'

class App extends Component {
//define the components state
constructor(){
    super()
    this.speed =  100
    this.rows = 25
    this.cols = 25
    this.state = {
        generation: 0,
        // build the grid - creates 25 * 25 grid with cells off
        buildGrid: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }


}
 

  render() {
    return (
      <div>
        <h1> Game Of Life </h1>
        <Grid
            buildGrid={this.state.buildGrid}
            rows={this.rows}
            cols={this.cols}
            /> 

        {/* print out generation number */}
        <h2>Generation: {this.state.generation}</h2>
       


        

        
      </div>
    );
  }
}

export default App;

// import React from 'react';
// import './Reset.css';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//          Boo
//         </p>
      
//       </header>
//     </div>
//   );
// }

// export default App;

