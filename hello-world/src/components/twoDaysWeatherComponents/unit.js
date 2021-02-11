import '../../css/style.css';
import React, { Component } from 'react';

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
    this.setState({unit_info: this.props.unit_info})
  }
  componentDidUpdate(prevProps, prevState, snapshot){
  
  }
  render(){
    const listItem = this.props.unit_info.weatherElement[2].time.map((v, idx)=>{
        const weather = this.props.unit_info.weatherElement[1].time[idx].elementValue[0].value
        return(
            <div key={v.dataTime} className={`tempblock ${weather==='晴'?'sun-color':'not-sun-color'}`}>
                <p>時間：{v.dataTime}</p>
                <p>天氣：{weather}</p>
                <p>體感溫度：{v.elementValue[0].value}({v.elementValue[0].measures})</p>
            </div>
        )
    })
    return(  
            <div className="col-md-4">
                <div className="area-card">
                  <h3>地區：{this.props.unit_info.locationName}</h3>
                  <h5>Click to read more</h5>
                </div>
               
                
            </div>
        );
  }
}

export default unit;
