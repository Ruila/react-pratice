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
        
      }
    }
      componentDidMount(){
        let list = []
        axios.get('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWB-66C1A43E-5E26-4909-8121-A12C192396ED')
        .then((v)=>{
          console.log(v);
        })
      }
      render(){
        return <div>{this.props.area}</div>
      }
}

export default player_block;
