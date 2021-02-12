import '../../../css/style.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
class Chart extends Component  {
  constructor() {
    super();
    this.state = {
     
    }
    
  }
  componentDidMount () {
      console.log('in chart', this.props.props)
  }
  render(){
    let inputData = [];
    const data = [
      {
        name: 'Page A',
        '溫度': 4000,
        '體感溫度': 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        '溫度': 3000,
        '體感溫度': 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        '溫度': 2000,
        '體感溫度': 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        '溫度': 2780,
        '體感溫度': 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        '溫度': 1890,
        '體感溫度': 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        '溫度': 2390,
        '體感溫度': 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        '溫度': 3490,
        '體感溫度': 4300,
        amt: 2100,
      },
      {
        name: 'Page H',
        '溫度': 2390,
        '體感溫度': 3800,
        amt: 2500,
      },
      {
        name: 'Page I',
        '溫度': 3490,
        '體感溫度': 4300,
        amt: 2100,
      },
      {
        name: 'Page K',
        '溫度': 2390,
        '體感溫度': 3800,
        amt: 2500,
      },
      {
        name: 'Page L',
        '溫度': 3490,
        '體感溫度': 4300,
        amt: 2100,
      },
    ];

    this.props.props.weatherElement[2].time.forEach((v, idx)=>{
        let obj = {
            name: v.dataTime,
            '體感溫度': v.elementValue[0].value,
            '溫度': this.props.props.weatherElement[3].time[idx].elementValue[0].value
        }
        inputData.push(obj)
    })

    // console.log('check oooobj', inputData)
    
    if(this.props.loginCheck){
      return (
          <div className="">
            <LineChart
            width={900}
            height={300}
            data={inputData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="體感溫度" stroke="#8884d8" activeDot={{ r: 10 }} />
            <Line type="monotone" dataKey="溫度" stroke="#82ca9d" />
          </LineChart>
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

export default connect(mapStateToProps)(Chart);