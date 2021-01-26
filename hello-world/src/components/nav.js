import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom"
import Home from './Home/home.js';
import Weather from '../twoDaysWeatherComponents/videoBoard.js'
import Login from './Login/login.js'
class Nav extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  
  render(){
    return (
        <HashRouter>
            <div className="m-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <hr />
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/weather" component={Weather} />
            <Route path="/login" component={Login} />
        </HashRouter>
    );
  } 
}

export default Nav;

