import '../../css/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
class loading extends Component  {
  constructor(props) {
    super(props);
    this.state = {
     
    }
    
  }

  componentDidMount () {
  }
  
  render(){
    return (
      <div className={`loading ${this.props.load.state?'':'hide'}`}>
        <h1>Loading............</h1>
         <div className="overlay"></div>
         
      </div>
     
     
    );
  } 
}

function mapStateToProps(state) {
  return {
    load: state.load,
  }
}

export default connect(mapStateToProps)(loading);