import React, { Component } from 'react';
import './App.css';

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
        nextstate = this.createFrame(this.state.cellData);
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
    clearInterval(this.state.interval):
    this.setState({
      isSimulating: false,
      interval: null
    })
  }

// fastforward
  //state

//rewind
  //state

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
