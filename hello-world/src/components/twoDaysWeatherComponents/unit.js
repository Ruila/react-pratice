import '../../css/style.css';
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import clouds from '../../images/clouds.png';
import sun from '../../images/sun.png';
import overcast from '../../images/overcast.png';
import rain from '../../images/raining.png';
import Information from "./information.js";

class unit extends Component {
  constructor(props) {
    super(props);
    this.state={ 
        unit_info:{},
    }

    this.checkbox=this.checkbox.bind(this);
  }

  checkbox(e){
    // console.log(e.target.checked)
    this.setState({ visible: e.target.checked});
  }
  componentDidMount(){
    // this.setState({unit_info: this.props.unit_info})
  }
  componentDidUpdate(prevProps, prevState, snapshot){
  
  }
  render(){
    const weatherProps = this.props.unit_info.weatherElement[1].time[0].elementValue[0].value;
    let weatherSituation = "";
    let weatherImg;
    let current_weather = ""

    if(weatherProps === "晴") {
      // weatherSituation ='sun-color';
      weatherImg = sun;
    } else if (weatherProps === "多雲") {
      // weatherSituation = 'not-sun-color';
      // current_weather = "目前氣象：多雲"
      weatherImg = clouds;
    } else if (weatherProps === "陰") {
      weatherImg = overcast;
    } else if (weatherProps === "短暫雨") {
      weatherImg = rain;
    }
      
    return(  
            <div className="col-md-4">
              <Link to={{
                pathname: '/weather/' + this.props.unit_info.locationName,
                state: {
                  detail_info: this.props.unit_info
                }
              }}>
                <div className={`area-card ${weatherSituation}`} style={{ backgroundImage: `url(${weatherImg})`}}>
                  {/* <h3>{current_weather}</h3> */}
                  <h3>地區：{this.props.unit_info.locationName}</h3>
                </div>
              </Link>
              
            </div>
        );
  }
}

export default unit;
