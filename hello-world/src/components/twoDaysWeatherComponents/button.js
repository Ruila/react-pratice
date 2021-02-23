import '../../css/style.css';
import React, { Component } from 'react';
import cookie from 'js-cookie';

class vbtn extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      aalert: false,
      inputValue: "",
      locationDict: [
        "宜蘭縣","桃園市","新竹縣","苗栗縣","彰化縣","南投縣","雲林縣","嘉義縣",
        "屏東縣","臺東縣","花蓮縣","澎湖縣","基隆縣","新竹市","嘉義市","臺北市",
        "高雄市","新北市","臺中市","臺南市","連江市","金門市","臺灣",
      ],
    }
    this.handleChange=this.handleChange.bind(this);
    this.search=this.search.bind(this);
  }
  handleChange(event){
    this.setState({inputValue: event.target.value});
    
  }
  search(){
    let flag = 0;
    // console.log('this.state.inputValue', this.state.inputValue)
    this.state.locationDict.map((v)=>{
      if(v===this.state.inputValue){
        flag = 1;
        return true;
      }
      return false;
    })

    //check the input is correct
    if(flag){
      this.props.changeArea(this.state.inputValue)
      this.setState({aalert: false});
    } else {
      this.setState({aalert: true});
    }

    //clear state
    this.setState({inputValue: ""});

    //set cookie
    cookie.set('area', this.state.inputValue)
    console.log('cookie', cookie.get('area'));
    
  }
  render(){
    return (
      <div id="input-area">
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button onClick={this.search}>
            查詢
          </button>
          <span className={`alert ${this.state.aalert?'':'hide'}`}>請輸入正確地名！</span>
        </div>
      </div>
     
    );
  } 
}

export default vbtn;
