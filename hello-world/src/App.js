import './App.css';
import Nav from './components/nav.js';
import Login from './components/Login/login.js';
import Home from './components/Home/home.js';
import Weather from './components/twoDaysWeatherComponents/videoBoard.js';
import Profile from './components/Profile/profile.js';
import SignUp from './components/SingUp/signup.js';
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
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/weather" component={Weather} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
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
