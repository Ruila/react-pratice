import '../../css/style.css';
import weatherImg from '../../images/cloudy.png';
import {apikey} from "../../api/apikey.js";
import React, {Component} from 'react';
import axios from 'axios';
import Unit from './unit';
import { connect } from 'react-redux';


class weatherBlock extends Component {
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
        info: {
          "臺南市": "F-D0047-077",
          location: []
        },
      }
      this.check=this.check.bind(this);
    }
    check(){
      this.getData(this.props.area);
    }
    getData(area){
      // this.props.dispatch({type: 'Loading'});
      axios.get(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${this.state.areaDict[area]}?Authorization=${apikey}`)
      .then((v)=>{
        this.setState({info: v.data.records.locations[0]})
       
      }).then(()=>{
        // this.props.dispatch({type: 'Done'});
      })
    }
    componentDidMount(){
      this.getData(this.props.area);

    }
    componentDidUpdate(prevProps, prevState, snapshot){
      if(prevProps.area!==this.props.area){
        this.check();
        }
    }
    render(){
      const listItem = this.state.info.location.map((v)=>{
        
        return <Unit key={v.locationName} unit_info={v}  area={this.props.area}/>
      })
      return <div className="width-100">
                <div className="top">
                  <img className="weatherImg" src={weatherImg} alt="weather"/>
                  <h1>{this.props.area}未來兩天天氣預報</h1>
                </div>
                <div className="container">
                  {listItem}
                </div>
        </div>
    }
}


function mapStateToProps(state) {
  return {
    load: state.load,
    loginCheck: state.loginCheck
  }
}

export default connect(mapStateToProps)(weatherBlock);
// export default player_block;
