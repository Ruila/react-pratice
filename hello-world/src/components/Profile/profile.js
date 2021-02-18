import React, { Component } from 'react';
import '../../css/profile.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import axios from 'axios';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import cookie from 'js-cookie';
class Profile extends Component  {
  constructor() {
    super();
    this.state = {
      name: "null",
      inroduction: "null",
      autobiography: "null",
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  getData(){
    let obj={};
    if(cookie.get('user')) {
      obj = {
        userid: JSON.parse(cookie.get('user')).userid,
        token: JSON.parse(cookie.get('user')).token
      }
    }
    axios.post('http://localhost:8000/api/user/profile', obj, {
        withCredentials: true,
      })
      .then(v=>{
        console.log('check profile', v)
        if(v.data.message === "failed"){
          console.log('faied get profile', v.data.text)
        } else if(v.data.message === "succeed") {
          this.setState({name: v.data.content.u_name, inroduction: v.data.content.u_intro, autobiography: v.data.content.u_autobio})
        }
        
      })
  }


  
  render(){
    if(this.props.loginCheck.state){
        return (
          <div id="profile">
            <div className="p-container">
              <div className="col-md-12">
                <div className="img-description">
                  <div className="img">
                    <div className="crap">

                    </div>
                  </div>
                  <div className="description">
                    <h5 className="name">{this.state.name}</h5>
                    <h5>{this.state.inroduction}</h5>
                  </div>
                </div>
                <div className="autobiography">
                  <h5>{this.state.autobiography}</h5>
                </div>
              </div>
            
            </div>
            <div className="socialMediaBlock">
              <div className="socialMedia">
                <div className="unit">
                  <FacebookIcon />
                </div>
                <div className="unit">
                  <InstagramIcon />
                </div>
                <div className="unit">
                  <TwitterIcon />
                </div>
                <div className="unit">
                  <LinkedInIcon />
                </div>
                <div className="unit">
                  <GitHubIcon />
                </div>
              </div> 
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

export default connect(mapStateToProps)(Profile);
// export default player_block;
