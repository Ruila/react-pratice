import '../css/style.css';
import videoimg from '../images/c-mobile-tamou-logo-draw.jpg';
import Api from "../api/youtubeApi.js";
import React, {Component} from 'react';
import { render } from '@testing-library/react';
import _axios from "axios"
import axios from 'axios';

class player_block extends Component {
    constructor() {
      super();
      this.state = {
        area: "臺南市",
        locationDict: {
          "臺南市": "F-D0047-077",
          "宜蘭縣": "F-D0047-001",
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
      // console.log("check props", this.state.area, this.props.area)
      this.getData();
    }
    getData(){
      let list = []
      axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${this.state.locationDict[this.state.area]}?Authorization=`)
      .then((v)=>{
        // console.log(v);
        this.setState({info: v.data.records.locations[0]})
        console.log(this.state.info)
      })
    }
    componentDidMount(){
      this.getData();
    }
    componentDidUpdate(prevProps, prevState, snapshot){
      // console.log("check props11111", prevProps.area, this.props.area)
      if(prevProps.area!==this.props.area){
        this.check();
        }
    }
    render(){
      var temp = (t) => t.weatherElement[2].time.map(v=>{
        return <div key={v.dataTime}>
                  <p>dateTime:{v.dataTime}</p>
                  <p>{v.elementValue[0].measures}:{v.elementValue[0].value}</p>
              </div>
      })
       
      
      const listItem = this.state.info.location.map((v)=>{
        console.log('check loca', v)
        const tempList = temp(v)
        return <div key={v.locationName}>
                <h3 >{v.locationName}</h3>
                <div>{tempList}</div>
        </div>
      })
      return <div>
                <h1>{this.state.info.locationsName}未來兩天天氣預報</h1>
                {listItem}
        
        </div>
    }
}

export default player_block;
