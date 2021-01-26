import React, { Component } from 'react';
import '../../css/login.css';

class Login extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  
  render(){
    return (
       <div id="login">
           <div className="block">
               <div>
                   <h1>Sign in</h1>
               </div>
                <div>
                    <input placeholder="account" />
                </div>
                <div>
                    <input placeholder="password" />
                </div>
                <div className="btn">
                    <span>login</span>
                </div>
           </div>
           
       </div>
    );
  } 
}

export default Login;

