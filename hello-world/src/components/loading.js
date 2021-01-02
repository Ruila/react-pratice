import '../css/style.css';
import React, { Component } from 'react';

class loading extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  
  render(){
    return (
      <div className="loading">
        <h1>Loading............</h1>
         <div className="overlay"></div>
         
      </div>
     
     
    );
  } 
}

export default loading;
