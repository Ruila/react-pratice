import '../../../css/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Chart from './chart.js';
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
    const props = this.props.location.state.detail_info;
    
    if(this.props.loginCheck){
      return (
        <div id="information">
          <div className="title">
            <h5>{props.locationName}</h5>
          </div>
          <Chart props={props} />
        </div>
      );
    } else {
      return (
        <Redirect to={'/login'} />
     );
    }
    
  } 
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(information);