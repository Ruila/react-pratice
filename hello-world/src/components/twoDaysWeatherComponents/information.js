import '../../css/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux'
class information extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  componentDidMount () {
    console.log('unit info in information', this.props.location.state)
  }
  render(){
    return (
      <div className="">
          Information
      </div>
     
     
    );
  } 
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(information);