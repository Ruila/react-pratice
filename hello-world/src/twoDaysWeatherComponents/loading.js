import '../css/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
class loading extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  
  render(){
    return (
      <div className={`loading ${this.props.load?'':'hide'}`}>
        <h1>Loading............</h1>
         <div className="overlay"></div>
         
      </div>
     
     
    );
  } 
}

function mapStateToProps(state) {
  return {
    load: state.load,
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(loading);