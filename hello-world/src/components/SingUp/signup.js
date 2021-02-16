import React, { Component } from 'react';
import '../../css/signup.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class SignUp extends Component  {
  constructor() {
    super();
    this.state = {
      userid: "",
      password: "",
      email: "",
      modal: false,
      message: "",
    }
    this.onchangeUserID = this.onchangeUserID.bind(this);
    this.onchangePassword = this.onchangePassword.bind(this);
    this.onchangeEmail = this.onchangeEmail.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.ModalOpen=this.ModalOpen.bind(this);
    this.ModalClose=this.ModalClose.bind(this);
  }

  ModalOpen () {
    this.setState({modal: true});
  }

  ModalClose () {
    this.setState({modal: false});
  }
  onchangeUserID(e){
    this.setState({userid: e.target.value})
  }
  onchangePassword(e){
    this.setState({password: e.target.value})
  }
  onchangeEmail(e){
    this.setState({email: e.target.value})
  }

  createAccount() {
    console.log('what;s going on')
    const obj = {
      "email": this.state.email,
      "password": this.state.password,
      "userid": this.state.userid,
    }
    axios.post('http://localhost:8000/api/user', obj)
    .then(v=>{
      console.log('logindd',v);
      if(v.data === "此信箱已註冊過！") {
        console.log('checksdsd')
        this.setState({message: "此信箱已註冊過！"})
        this.setState({modal: true});
        this.setState({userid: ""});
        this.setState({password: ""});
        this.setState({email: ""});
      }
    });
  }

  render(){
    if(this.props.loginCheck.state){
        return (
          <div id="signup">
              <div className="signup-block">
                {/* <div className="input-block">
                    <span>ID</span>
                    <input value={this.state.id} onChange={this.onchangeID}/>
                </div> */}
                <div className="input-block">
                    <span>USERID</span>
                    <input value={this.state.userid} onChange={this.onchangeUserID}/>
                </div>
                <div className="input-block">
                    <span>PASSWORD</span>
                    <input value={this.state.password} onChange={this.onchangePassword}/>
                </div>
                <div className="input-block">
                    <span>EMAIL</span>
                    <input value={this.state.email} onChange={this.onchangeEmail}/>
                </div>
                <div className="btn-block">
                    <span className="btn" onClick={this.createAccount}>註冊</span>
                </div>
              </div>
              <Modal
              id="loginModal"
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
                    <h2>{this.state.message}</h2>
                  </div>
                </Fade>
            </Modal>
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

export default connect(mapStateToProps)(SignUp);
// export default player_block;
