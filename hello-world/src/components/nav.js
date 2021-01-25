import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom"
import Home from './Home/home.js';
import Weather from '../twoDaysWeatherComponents/videoBoard.js'
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
                    <li><Link to="/">回到首頁</Link></li>
                    <li><Link to="/weather">關於我們</Link></li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/weather" component={Weather} />
            </div>
        </HashRouter>
    );
  } 
}

export default Nav;

