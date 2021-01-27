import './App.css';
import Nav from './components/nav.js';
import Login from './components/Login/login.js';
import Home from './components/Home/home.js';
import Weather from './twoDaysWeatherComponents/videoBoard.js'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  componentDidMount (){
    console.log('in app js', this.props.loginCheck)
  }
  checkLoginState(){

  }
  
  render(){
    return (
      <HashRouter>
       <div className="App">
        <Nav />
      </div>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route path="/weather" component={Weather} />
  </HashRouter>
    );
  } 
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(App);
// export default player_block;
