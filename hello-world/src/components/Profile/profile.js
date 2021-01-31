import React, { Component } from 'react';
import '../../css/login.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Profile extends Component  {
  constructor() {
    super();
    this.state = {
    }
  }




  
  render(){
    if(this.props.loginCheck){
        return (
          <div>is profile</div>
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

export default connect(mapStateToProps)(Profile);
// export default player_block;
