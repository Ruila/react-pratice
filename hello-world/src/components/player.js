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
        lala: [],
        debug: ''
      }
      this.getApi=this.getApi.bind(this);
    }
      //取得數據庫http://localhost:3003/posts的數據
      getApi() {
        Api.get().then((v)=>{
            // videoList = v.data.items
            this.setState({lala: v.data.items})
            // debug["url"] = v.data.items.snippet.thumbnails.medium.url
            console.log(v.data.items);
         
            
            // console.log('success')
        }).catch(() => {
        console.log('failure');
        })

        // console.log(this.state.lala);

      }

      componentDidMount(){
        let list = []
        // axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=UU0C-w0YjGpqDXGB8IHb662A&key=AIzaSyDTYKiAZ33YnLej2kOuVPkckWz5RVSycJg')
        // .then((v)=>{
        //   console.log('did', v)
        // })
        axios.get('https://source.unsplash.com/collection/190727/1600x900')
        .then((v)=>{
          for(let i=0; i<5; i++){
            list[i] = `${v.config.url}`;
          }
          this.setState({debug: v.config.url})
          this.setState({lala: list})
        })
      }
      
      render(){
        // console.log('did', this.state.debug)

        // console.log('did', this.state.lala.length)
        let lists = this.state.lala.map((list, index) => {
            <div  className="player-block">
            <div className="img">
              <img key={index} src={list} alt="videoimg"/>
            </div>
              <div className="text">
                  <span>videoName</span>
              </div>
            </div>
        })
        console.log('?????', lists)
        if(this.state.lala.length == 5){
          console.log('good')
          // console.log(lists)
          return (
            <div>
                {lists}
            </div>
              
              // <div  className="player-block">
              //   <div className="img">
              //     <img src={videoimg} alt="videoimg"/>
              //   </div>
              //   <div className="text">
              //       <span>videoName</span>
              //   </div>
              //  </div>
            );
        }else{
          console.log('gGG')
          console.log('ffff',lists)
          return (
            <div>
                {lists}
            </div>
            // <div  className="player-block">
              //   <div className="img">
              //     <img src={videoimg} alt="videoimg"/>
              //   </div>
              //   <div className="text">
              //       <span>videoName</span>
              //   </div>
              //  </div>
            );
        }
       
      }
 
  
}

export default player_block;
