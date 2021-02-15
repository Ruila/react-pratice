import '../../../css/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Chart from './chart.js';
import SunOrRain from './sunOrRain.js';
import axios from 'axios';
import {apikey} from "../../../api/apikey.js";

class information extends Component  {
  constructor() {
    super();
    this.state = {
      areaDict: {
        "宜蘭縣": "F-D0047-001",
        "桃園市": "F-D0047-005",
        "新竹縣": "F-D0047-009",
        "苗栗縣": "F-D0047-013",
        "彰化縣": "F-D0047-017",
        "南投縣": "F-D0047-021",
        "雲林縣": "F-D0047-025",
        "嘉義縣": "F-D0047-029",
        "屏東縣": "F-D0047-033",
        "臺東縣": "F-D0047-037",
        "花蓮縣": "F-D0047-041",
        "澎湖縣": "F-D0047-045",
        "基隆縣": "F-D0047-049",
        "新竹市": "F-D0047-053",
        "嘉義市": "F-D0047-057",
        "臺北市": "F-D0047-061",
        "高雄市": "F-D0047-065",
        "新北市": "F-D0047-069",
        "臺中市": "F-D0047-073",
        "臺南市": "F-D0047-077",
        "連江市": "F-D0047-081",
        "金門市": "F-D0047-085",
        "臺灣": "F-D0047-089",
      },
      data: {}
    }
    this.getData = this.getData.bind(this);
  }
  componentDidMount () {
    // this.getData();
  }
  getData(){
    axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${this.state.areaDict[this.props.location.state.area]}?Authorization=${apikey}`)
    .then((v)=>{
      v.data.records.locations[0].location.map(v=>{
        if(v.locationName === this.props.location.state.location){
          console.log('wtf', v)
          this.setState({data: v})
        }
      })
    }).then(()=>{
    })
  }
  render(){
    // let sunPeriod = []
    const props = this.props.location.state.detail_info;
    console.log('wtfff', this.props.location.state.detail_info)
    const sunPeriod = props.weatherElement[1].time.map((v,idx) => {
      if(v.elementValue[0].value === '晴') {
        return <h5 key={idx}>{v.startTime} ~ {v.endTime}</h5>
      }
    });

    const rainPeriod = props.weatherElement[1].time.map((v,idx) => {
      if(v.elementValue[0].value === '短暫雨') {
        return <h5 key={idx}>{v.startTime} ~ {v.endTime}</h5>
      }
    });
    console.log('check rain ', rainPeriod)

    if(this.props.loginCheck){
      return (
        <div id="information">
          <div className="container">
            <div className="col-md-12">
              <div className="title">
                <span>{props.locationName}</span>
              </div>
            </div>
            
            <div className="container mt-30">
              <div className="col-md-6">
                <SunOrRain condition="sun" period={sunPeriod}/>
              </div>
              <div className="col-md-6">
              <SunOrRain condition="rain" period={rainPeriod}/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="temperature">
                <h5>Temperature</h5>
                <Chart props={props} />
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

export default connect(mapStateToProps)(information);