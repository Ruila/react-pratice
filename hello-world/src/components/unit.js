import '../css/style.css';
import React, { Component } from 'react';

class unit extends Component {
  constructor(props) {
    super(props);
    this.state={ 
        unit_info:{}
    }
  }
  componentDidMount(){
    this.setState({unit_info: this.props.unit_info})
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log("check props11111", this.props.unit_info)
    // if(prevProps.unit_info!==this.props.unit_info){
    //   this.check();
    //   console.log(';;;')
    //   }
  }
  render(){
    const listItem = this.props.unit_info.weatherElement[2].time.map((v)=>{
        return(
            <div key={v.dataTime} className="tempblock">
                <p>時間：{v.dataTime}</p>
                <p>溫度：{v.elementValue[0].value}({v.elementValue[0].measures})</p>
            </div>
        )
    })
    return(  
            <div className="col-md-4">
                <h3>地區：{this.props.unit_info.locationName}</h3>
                {listItem}
            </div>
        );
  }
}

export default unit;
