import React, { Component } from 'react'
import Grid from './components/Grid'

class App extends Component {
//define the components state
constructor(){
    super();
    this.state = {
        generation: 0,
    }
}
 

  render() {
    return (
      <div>
        <h1> Game Of Life </h1>
        <Grid /> 

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

