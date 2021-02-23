import '../../../css/sun.css';
import '../../../css/rain.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class SunOrRain extends Component  {
  constructor(props) {
    super(props);
    this.state = {
    modal: false,
    }
    this.checkPeriod = this.checkPeriod.bind(this);
    this.ModalClose = this.ModalClose.bind(this);
  }
  componentDidMount () {
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.props!==this.props.props){
      }
  }
  ModalClose () {
    this.setState({modal: false});
  }
  checkPeriod () {
    this.setState({modal: true});
  }
  render(){
    if(this.props.condition === "sun"){
      return (
        <div>
          <div className="title-small">
            <span>晴天時段</span>
          </div>
          <div className="sun-content">
            <div className="container-sun">
              <svg className="svg-sun" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">
              <circle cx="50" cy="50" r="35" id="sun"></circle>
              </svg>
            </div>
          <div className="container-time">
            <h5 onClick={this.checkPeriod}>查看時段</h5>
          </div>
          </div>
          <Modal
              id="sunOrRainModal"
              open = {this.state.modal}
              onClose = {this.ModalClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              >
                <Fade in={this.state.modal}>
                  <div className="modal_content">
                    {this.props.period}
                  </div>
                </Fade>
            </Modal>
        </div>
     )
    } else if (this.props.condition === "rain") {
      return (
        <div>
          <div className="title-small">
            <span>下雨時段</span>
          </div>
          <div className="sun-content">
            <div className="wrapper">
              <div className="cloud">
                <div className="cloud_left"></div>
                <div className="cloud_right"></div>
              </div>
              <div className="rain">
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
                <div className="drop"></div>
              </div>
              <div className="surface">
                <div className="hit"></div>
                <div className="hit"></div>
                <div className="hit"></div>
                <div className="hit"></div>
                <div className="hit"></div>
              </div>
            </div>
          <div className="container-time">
            <h5 onClick={this.checkPeriod}>查看時段</h5>
          </div>
          </div>
          <Modal
              id="sunOrRainModal"
              open = {this.state.modal}
              onClose = {this.ModalClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              >
                <Fade in={this.state.modal}>
                  <div className="modal_content">
                    {this.props.period}
                  </div>
                </Fade>
            </Modal>
        </div>
     )
    }
   
  }
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(SunOrRain);