import React, { Component } from 'react';
import '../../css/profile.css';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

class Profile extends Component  {
  constructor() {
    super();
    this.state = {
    }
  }




  
  render(){
    if(this.props.loginCheck){
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
                    <div className="socialMedia">
                      <div class="unit">
                        <FacebookIcon />
                      </div>
                      <div class="unit">
                        <InstagramIcon />
                      </div>
                      <div class="unit">
                        <TwitterIcon />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="socialMedia">
            
                  
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
