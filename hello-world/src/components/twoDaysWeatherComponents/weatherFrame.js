import '../../css/style.css';
import WeatherBlock from './weatherBlock.js'
import Btn from './button.js'
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import cookie from 'js-cookie';


class weatherFrame extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      currentArea: "臺南市",
    }
    this.changeArea=this.changeArea.bind(this);
  } 
  componentDidMount() {
    if(cookie.get('area')) {
      console.log('cookie in weather', cookie.get('area'))
      this.setState({currentArea: cookie.get('area')})
    }
  }
  changeArea(area){
      this.setState({currentArea: area})
  }
  render(){
    console.log('in weather logincheck', this.props.loginCheck)
    if(this.props.loginCheck.state){
      return(
        <div id="weather">
          <Btn data-testid="btn" area={this.state.currentArea} changeArea={this.changeArea}/>
          <div className="video-board">
            <WeatherBlock data-testid="data-block" area={this.state.currentArea}/>
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

export default connect(mapStateToProps)(weatherFrame);
// export default player_block;
