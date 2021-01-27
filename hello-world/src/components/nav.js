import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Nav extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }

  componentDidMount (){
    console.log('in nav js', this.props.loginCheck)
    
  }
  
  render(){
    return (
            <div className="m-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/weather">Weather</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <hr />
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
