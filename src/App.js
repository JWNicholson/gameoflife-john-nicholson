import React, { Component } from 'react';
import './App.css';

import Grid from './components/Grid';

//import Grid from './components/Grid';

export default class App extends Component {
  render() {
    return (
    
<div className="App">
<header className="App-header">
  <h1>Conways Game of Life</h1>
  <p>
    My explanation
  </p>
  </header>
 <div className="gameCtnr">
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
