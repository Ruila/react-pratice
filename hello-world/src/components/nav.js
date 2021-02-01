import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { AppBar, Tab, Tabs, Paper } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';

class Nav extends Component  {
  constructor() {
    super();
    this.state = {
      current: '/',
      value: ['/', '/profile', '/weather'],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount (){
    console.log('in nav js', this.props.loginCheck)
    
  }

  handleChange(e){
    console.log('e=1', e.target)
    console.log('e=', e.target.text)
    // this.setState({current: e.target.value})
  }
  
  render(){
    return (
            <div className="m-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                </ul>
                <hr />
                <AppBar position="static">
                  <Tabs value={this.state.current} onChange={this.handleChange} aria-label="simple tabs example">
                    <Tab label="Home" value={this.state.value[0]} component={Link} to={this.state.value[0]}/>
                    <Tab label="Profile" value="/profile" component={Link} to={this.state.value[1]} />
                    <Tab label="Weather" value="/weather" component={Link} to={this.state.value[2]} />
                  </Tabs>
                </AppBar>
               
            </div>
    );
  } 
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(Nav);
// export default player_block;
