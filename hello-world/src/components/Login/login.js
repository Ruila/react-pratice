import React, { Component } from 'react';
import '../../css/login.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Login extends Component  {
  constructor() {
    super();
    this.state = {
      account: "",
      password: "",
    }
    this.checkLogin=this.checkLogin.bind(this);
    this.handleAccount=this.handleAccount.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    
  }

  componentDidMount () {
    console.log(this.state.account)
  }

  handleAccount (event){
    this.setState({account: event.target.value});
  }

  handlePassword (event){
    this.setState({password: event.target.value});
  }


  checkLogin(){
      if (this.state.account === "a" && this.state.password === 'b') {
        this.props.dispatch({type: 'Login'});
        console.log('go', this.props.loginCheck);
       
      }
      console.log(this.state.account)
  }
  
  render(){
    if(this.props.loginCheck){
      return (
        <Redirect to={'/'} />
     );
     
    } else {
      return (
        <div id="login">
            <div className="block">
                <div>
                    <h1>Sign in</h1>
                </div>
                 <div>
                     <input value={this.state.account} onChange={this.handleAccount} type="text" />
                 </div>
                 <div>
                     <input value={this.state.password} onChange={this.handlePassword} type="text" />
                 </div>
                 <div className="btn">
                     <span onClick={this.checkLogin}>login</span>
                 </div>
            </div>
            
        </div>
     );
    }
   
  } 
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(Login);
// export default player_block;
