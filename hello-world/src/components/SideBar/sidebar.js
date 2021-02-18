import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import cookie from 'js-cookie';

class SideBar extends Component  {
  constructor() {
    super();
    this.state = {
        status: false
    }
    this.sideBarOpen = this.sideBarOpen.bind(this);
    this.sideBarClose = this.sideBarClose.bind(this);
    this.logout = this.logout.bind(this);
  }

  sideBarOpen () {
      this.setState({status: true});
  }

  sideBarClose () {
    this.setState({status: false});
  }

  logout () {
    this.props.dispatch({type: 'Logout'});
    cookie.remove('user');
  }

  
  render(){
   return (
       <div id="SideBarBtn" className={`${this.props.loginCheck.state?'':'hide'}`}>
        <React.Fragment key="right">
            <div className="button" onClick={this.sideBarOpen}>Click</div>
            <Drawer anchor="right" open={this.state.status} onClose={this.sideBarClose}>
                <div id="drawerContent">
                    <div className="unit" onClick={this.logout}>
                        <span>登出</span>
                    </div>
                    
                </div>
            </Drawer>
        </React.Fragment>
       </div>
   )
    
  } 
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(SideBar);
// export default player_block;
