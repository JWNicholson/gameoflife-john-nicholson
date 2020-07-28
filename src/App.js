import React, { Component } from 'react';
import './App.css';

import Grid from './components/Grid';

//import Grid from './components/Grid';

export default class App extends Component {
//constructor

//start animation
  //state
//stop animation
  //state

// fastforward
  //state

//rewind
  //state

//clear board
  //state

//change handlers



  render() {
    return (
    
<div className="App">
<header className="App-header">
  <h1>Conways Game of Life</h1>
  <p>
    My explanation
  </p>
  <p>Current Generation number goes here (uses state)</p>
  </header>
 <div className="gameContainer">
  gameContainer uses state
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
