import '../../css/eCommerce.css';
import Input from './input.js';
import Content from './content';
import React, { Component } from 'react';
import Json from './biggo_sitetype.json'

class block extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      currentInput: "",
      currentList: [],
    }
    this.updateInput=this.updateInput.bind(this);
    this.updateCurrentList=this.updateCurrentList.bind(this);
  }
  componentDidMount(){
  }
  updateInput(input){
      this.setState({currentInput: input})
  }
  updateCurrentList(list){
    this.setState({currentList: list})
}
  render(){
    return(
      <div className="block-layout">
        <Input alldata = {Json} updateInput = {this.updateInput} updateCurrentList = {this.updateCurrentList}/>
        <Content alldata = {Json} currentInput = {this.state.currentInput} currentList = {this.state.currentList}/>
      </div>
    );
  }
}

export default block;
