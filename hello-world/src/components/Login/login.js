import React, { Component } from 'react';
import '../../css/login.css';

class Login extends Component  {
  constructor() {
    super();
    this.state = {
      account: "d",
      password: "d",
    }
    this.checkLogin=this.checkLogin.bind(this);
    this.handleAccount=this.handleAccount.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    
  }

  componentDidMount () {
    console.log(this.state.account)
  }

  handleAccount (){

  }

  handlePassword (){

  }


  checkLogin(){
      if (this.state.account === "a" && this.state.password === 'b') {
        this.props.dispatch({type: 'Login'});
      }
      console.log(this.state.account)
  }
  
  render(){
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

export default Login;

