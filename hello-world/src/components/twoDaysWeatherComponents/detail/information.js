import '../../../css/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Chart from './chart.js';
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
    const props = this.props.location.state.detail_info;
    console.log('wtfff', this.state.data)
    if(this.props.loginCheck){
      return (
        <div id="information">
          <div className="title">
            <h5>{props.locationName}</h5>
          </div>
          <Chart props={props} />
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