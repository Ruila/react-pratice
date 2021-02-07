import '../../css/style.css';
import PlayerBlock from './player.js'
import Btn from './button.js'
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

class videoBoard extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      currentArea: "臺南市",
    }
    this.changeArea=this.changeArea.bind(this);
  } 
    changeArea(area){
      this.setState({currentArea: area})
  }
  render(){
    console.log('in weather', this.props.loginCheck)
    if(this.props.loginCheck){
      return(
        <div>
          <Btn data-testid="btn" area={this.state.currentArea} changeArea={this.changeArea}/>
          <div className="video-board">
            <PlayerBlock data-testid="data-block" area={this.state.currentArea}/>
          </div>
        </div>
      );
    } else {
      return (
        <Redirect to={'/login'} />
     );
    }
  }
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(videoBoard);
// export default player_block;
