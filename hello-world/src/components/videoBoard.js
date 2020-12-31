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
      console.log('has change', area, this.state.currentArea);
      this.setState({currentArea: area})
        // this.state.currentArea = area;
        console.log('after has change ', this.state.currentArea);
  }
  render(){
    return(
      <div>
        <Btn area={this.state.currentArea} changeArea={this.changeArea}/>
        <div className="video-board">
          <PlayerBlock area={this.state.currentArea}/>
        </div>
      </div>
    );
  }
}

export default videoBoard;
