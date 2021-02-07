import React, { Component } from 'react';
import '../../css/signup.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import axios from 'axios';

class SignUp extends Component  {
  constructor() {
    super();
    this.state = {
      id: "",
      userid: "",
      password: "",
      email: ""
    }
    this.onchangeID = this.onchangeID.bind(this);
    this.onchangeUserID = this.onchangeUserID.bind(this);
    this.onchangePassword = this.onchangePassword.bind(this);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }
  
  onchangeID(e){
    this.setState({id: e.target.value})
  }
  onchangeUserID(e){
    this.setState({userid: e.target.value})
  }
  onchangePassword(e){
    this.setState({password: e.target.value})
  }
  onchangeEmail(e){
    this.setState({email: e.target.value})
  }

  createAccount() {
    const obj = {
      "id": "0000",
      "email": this.state.email,
      "password": this.state.password,
      "userid": this.state.userid,
    }
    axios.post('http://localhost:8000/api/user', obj)
    .then(v=>{
      console.log('logindd',v);
    });
  }

  render(){
    if(this.props.loginCheck){
        return (
          <div id="signup">
              <div className="signup-block">
                {/* <div className="input-block">
                    <span>ID</span>
                    <input value={this.state.id} onChange={this.onchangeID}/>
                </div> */}
                <div className="input-block">
                    <span>USERID</span>
                    <input value={this.state.userid} onChange={this.onchangeUserID}/>
                </div>
                <div className="input-block">
                    <span>PASSWORD</span>
                    <input value={this.state.password} onChange={this.onchangePassword}/>
                </div>
                <div className="input-block">
                    <span>EMAIL</span>
                    <input value={this.state.email} onChange={this.onchangeEmail}/>
                </div>
                <div className="btn-block">
                    <span className="btn" onClick={this.createAccount}>註冊</span>
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
