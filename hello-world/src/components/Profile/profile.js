import React, { Component } from 'react';
import '../../css/profile.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
class Profile extends Component  {
  constructor() {
    super();
    this.state = {
    }
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
                    <h5 className="name">William Lin</h5>
                    <h5>Software Engineer | Frontend Engineer | Photographer</h5>
                  </div>
                </div>
                <div className="autobiography">
                  <h5>我認為人的成長源自於對生活的熱忱，保有熱忱才有學習的動力。於2020年畢業於國立中正大學資工系，研究專題為嵌入式系統領域，當時因為學校附近時常有工廠在焚燒廢棄物，造成學校附近空汙問題，因此我和組員們使用了Raspberry Pi 和 Android打造了一個「空汙探測器」，希望找出校園附近的空汙來源。</h5>
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
