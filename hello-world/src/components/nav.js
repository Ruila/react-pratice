import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import cookie from 'js-cookie';

class Nav extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      current: '/',
      value: ['/', '/profile', '/weather', '/signup', '/eCommerceInput', '/counter'],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount (){
    // console.log('in nav js', this.props.loginCheck)
    if(cookie.get('nav')){
      this.setState({current: cookie.get('nav')});
    }
    
  }

  handleChange(e){
    switch(e.target.innerText){
      case 'HOME':
        this.setState({current: '/'})
        cookie.set('nav', '/')
        return;
      case 'PROFILE':
        this.setState({current: '/profile'})
        cookie.set('nav', '/profile')
        return;
      case 'WEATHER':
        this.setState({current: '/weather'})
        cookie.set('nav', '/weather')
        return;
      case 'SIGNUP':
      this.setState({current: '/signup'})
      cookie.set('nav', '/signup')
      return;
      case 'ECOMMERCEINPUT':
      this.setState({current: '/eCommerceInput'})
      cookie.set('nav', '/eCommerceInput')
      return;
      case 'COUNTER':
      this.setState({current: '/counter'})
      cookie.set('nav', '/counter')
      return;
      default:
        this.setState({current: '/'})
        return;
    }
  }
  
  render(){
    const theme = createMuiTheme({
      overrides: {
        MuiTabs:{
          indicator: {
            backgroundColor: '#ffffff',
          }
        },
        MuiTab: {
          root: {
            "&:hover": {
              backgroundColor: '#ffffff',
              color: '#151518'
            }
          },
        }
      }
    })
    return (
            <div className={`m-nav ${this.props.loginCheck.state?'':'hide'}`} >
              <MuiThemeProvider theme={theme}>
                  <AppBar position="static">
                    <Tabs value={this.state.current} 
                          onChange={this.handleChange} 
                          aria-label="simple tabs example" 
                          indicatorColor="secondary"
                          variant="scrollable"
                          scrollButtons="auto">
                      <Tab label="Home" value={this.state.value[0]} component={Link} to={this.state.value[0]}/>
                      <Tab label="Profile" value="/profile" component={Link} to={this.state.value[1]} />
                      <Tab label="Weather" value="/weather" component={Link} to={this.state.value[2]} />
                      <Tab label="SignUp" value="/signup" component={Link} to={this.state.value[3]} />
                      <Tab label="eCommerceInput" value="/eCommerceInput" component={Link} to={this.state.value[4]} />
                      <Tab label="Counter" value="/counter" component={Link} to={this.state.value[5]} />
                    </Tabs>
                  </AppBar>
                </MuiThemeProvider>
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
