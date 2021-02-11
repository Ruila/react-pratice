import './App.css';
import Nav from './components/nav.js';
import Login from './components/Login/login.js';
import Home from './components/Home/home.js';
import Weather from './components/twoDaysWeatherComponents/weatherFrame.js';
import Profile from './components/Profile/profile.js';
import SignUp from './components/SingUp/signup.js';
import eCommerceInput from './components/E-commerceInput/block.js';
import Information from "./components/twoDaysWeatherComponents/information.js";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from "react-router-dom";

class App extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  componentDidMount (){
    // console.log('in app js', this.props.loginCheck)
  }
  checkLoginState(){

  }
  
  render(){
    return (
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/weather" component={Weather} />
        <Route path="/eCommerceInput" component={eCommerceInput} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/weather/:id" component={Information} />
      </div>
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
