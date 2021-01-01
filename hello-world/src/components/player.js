import '../css/style.css';
import videoimg from '../images/c-mobile-tamou-logo-draw.jpg';
import Api from "../api/youtubeApi.js";
import React, {Component} from 'react';
import { render } from '@testing-library/react';
import _axios from "axios"
import axios from 'axios';
import Unit from './unit'

class player_block extends Component {
    constructor() {
      super();
      this.state = {
        area: "臺南市",
        locationDict: {
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
        info: {
          "臺南市": "F-D0047-077",
          location: []
        },
      }
      this.check=this.check.bind(this);
    }
    check(){
      this.setState({area: this.props.area})
      console.log("check props", this.state.area, this.props.area)
      this.getData();
    }
    getData(){
      axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${this.state.locationDict[this.props.area]}?Authorization=CWB-66C1A43E-5E26-4909-8121-A12C192396ED`)
      .then((v)=>{
        console.log('qq', v);
        this.setState({info: v.data.records.locations[0]})
        // console.log(this.state.info)
      })
    }
    componentDidMount(){
      this.getData();

    }
    componentDidUpdate(prevProps, prevState, snapshot){
      console.log("componentDidUpdate", prevProps.area, this.props.area)
      if(prevProps.area!==this.props.area){
        this.check();
        console.log("inside componentDidUpdate", prevProps.area, this.props.area)
        }
    }
    render(){
      const listItem = this.state.info.location.map((v)=>{
        
        return <Unit key={v.locationName} unit_info={v}/>
      })
      return <div className="width-100">
                <h1>{this.state.area}未來兩天天氣預報</h1>
                <div className="container">
                  {listItem}
                </div>
        </div>
    }
}

export default player_block;
