import './App.css';
import Loading from './components/loading.js'
import PlayerBoard from './components/videoBoard.js'

import React, { Component } from 'react';

class App extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  
  render(){
    return (
      <div className="App">
        <PlayerBoard/>
        <Loading/>
    </div>
    );
  } 
}

export default App;

