import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Tab, Tabs, Paper } from '@material-ui/core';
import { TabPanel } from '@material-ui/lab';

class Nav extends Component  {
  constructor() {
    super();
    this.state = {
      value: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount (){
    console.log('in nav js', this.props.loginCheck)
    
  }

  handleChange(e){
    this.setState({value: e.target.value})
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
                <Paper square>
                  <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                  >
                    <Tab label="Active" />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                  </Tabs>
                </Paper>
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
