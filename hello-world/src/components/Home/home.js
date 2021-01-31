import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class Home extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  
  render(){
    console.log('in home', this.props.loginCheck);
    if(this.props.loginCheck){
      return (
        <div>is your home</div>
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

export default connect(mapStateToProps)(Home);
// export default player_block;
