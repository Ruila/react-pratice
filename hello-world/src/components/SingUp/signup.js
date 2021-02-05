import React, { Component } from 'react';
import '../../css/signup.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class SignUp extends Component  {
  constructor() {
    super();
    this.state = {
        userid: "",
    }
    this.onchangeUserID = this.onchangeUserID.bind(this);
  }
  
  onchangeUserID(e){
    this.setState({userid: e.target.value})
  }

  render(){
    if(this.props.loginCheck){
        return (
          <div id="signup">
              <div className="signup-block">
                <div className="input-block">
                    <span>ID</span>
                    <input />
                </div>
                <div className="input-block">
                    <span>USERID</span>
                    <input value={this.state.userid} onChange={this.onchangeUserID}/>
                </div>
                <div className="input-block">
                    <span>PASSWORD</span>
                    <input />
                </div>
                <div className="input-block">
                    <span>EMAIL</span>
                    <input />
                </div>
                <div className="btn-block">
                    <span className="btn">註冊</span>
                </div>
              </div>
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

export default connect(mapStateToProps)(SignUp);
// export default player_block;
