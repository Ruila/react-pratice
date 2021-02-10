import React, { Component } from 'react';
import '../../css/login.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


class Login extends Component  {
  constructor() {
    super();
    this.state = {
      account: "",
      password: "",
      modal: false,
      message: "",
      emailAlert: true,
      passwordAlert: true,
    }
    this.checkLogin=this.checkLogin.bind(this);
    this.handleAccount=this.handleAccount.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.ModalOpen=this.ModalOpen.bind(this);
    this.ModalClose=this.ModalClose.bind(this);
  }

  componentDidMount () {
    console.log(this.state.account)
  }

  handleAccount (event){
    this.setState({account: event.target.value});
  }

  handlePassword (event){
    this.setState({password: event.target.value});
  }

  ModalOpen () {
    this.setState({modal: true});
  }

  ModalClose () {
    this.setState({modal: false});
  }

  checkLogin(){
    const obj = {
      "email": this.state.account,
      "password": this.state.password,
    }
    if(this.state.account === ""){
      this.setState({emailAlert: false})
    } else if (this.state.password === "") {
      this.setState({passwordAlert: false});
    } else {
      axios.post('http://localhost:8000/api/user/logincheck', obj, {
        withCredentials: true,
        headers: {
          Cookie: 'cookie1=1234'
        }
      })
      .then(v=>{
        console.log('logindd',v);
        if(v.data === 'succeed'){
          this.props.dispatch({type: 'Login'});
        } else {
          this.setState({message: v.data});
          this.setState({modal: true});
        }
      });
    }

  }
  
  render(){
    if(this.props.loginCheck){
      return (
        <Redirect to={'/'} />
     );
     
    } else {
      return (
        <div id="login">
            <div className="block">
                <div>
                    <h1>Sign in</h1>
                </div>
                 <div className="input-block">
                  <span>Email:</span>
                  <input value={this.state.account} onChange={this.handleAccount} type="text" />
                 </div>
                 <div className={`input-block wrong ${this.state.emailAlert?'hide':''}`}>
                  <span></span>
                  <h5>***請輸入正確信箱***</h5>
                 </div>
                 <div className="input-block">
                  <span>Password:</span>
                  <input value={this.state.password} onChange={this.handlePassword} type="text" />
                 </div>
                 <div className={`input-block wrong ${this.state.passwordAlert?'hide':''}`}>
                  <span></span>
                  <h5>***請輸入正確密碼***</h5>
                 </div>
                 <div className="btn">
                     <span onClick={this.checkLogin}>login</span>
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
    }
   
  } 
}

function mapStateToProps(state) {
  return {
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(Login);
// export default player_block;
