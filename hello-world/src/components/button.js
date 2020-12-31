import '../css/style.css';
import React, { Component } from 'react';

class vbtn extends Component  {
  constructor() {
    super();
    this.state = {
      inputValue: "臺南市",
    }
    this.handleChange=this.handleChange.bind(this);
    this.search=this.search.bind(this);
  }
  handleChange(event){
    console.log(event.target.value, this.state.inputValue);
    this.setState({inputValue: event.target.value});
    
  }
  search(){
    this.props.changeArea(this.state.inputValue)
  }
  render(){
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
        <button onClick={this.search}>
          查詢
        </button>
      </div>
     
    );
  } 
}

export default vbtn;
