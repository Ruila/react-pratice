import '../css/style.css';
import PlayerBlock from './player.js'
import Btn from './button.js'
import React, { Component } from 'react';


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
    return(
      <div>
        <Btn data-testid="btn" area={this.state.currentArea} changeArea={this.changeArea}/>
        <div className="video-board">
          <PlayerBlock data-testid="data-block" area={this.state.currentArea}/>
        </div>
      </div>
    );
  }
}

export default videoBoard;
