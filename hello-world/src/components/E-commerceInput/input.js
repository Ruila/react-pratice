import '../../css/eCommerce.css';
import DropdownUnit from './dropdownUnit'
import React, { Component } from 'react';

class input extends Component  {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      inputValue: "",
      outputlist: [],
      arrayType: [],
      dropdownHide: true,
      clearHide: true,
    }
    this.handleChange=this.handleChange.bind(this);
    this.onFocus=this.onFocus.bind(this);
    this.onBlur=this.onBlur.bind(this);
    this.search=this.search.bind(this);
    this.updateDropdown=this.updateDropdown.bind(this);
    this.suggestionSearch=this.suggestionSearch.bind(this);
    this.clear=this.clear.bind(this);
  }
  componentDidMount(){
    let arrayType = []
    for(let i in this.props.alldata){
      let obj = {
        'imgurl': '',
        'id': '',
        'name': ''
      }
      obj['imgurl'] = this.props.alldata[i].detail.image;
      obj['id'] = i;
      obj['name'] = this.props.alldata[i].item.name;
      arrayType.push(obj)
    }
    this.setState({arrayType: arrayType});
  }
  // when you are typing in input
  handleChange(event){
    if(event.target.value.length>0){
      this.setState({clearHide: false})
    } else if (event.target.value.length === 0){
      this.setState({clearHide: true})
      this.setState({dropdownHide: true})
    }
    this.setState({inputValue: event.target.value});
    this.updateDropdown(event.target.value);
    // console.log('check input', event.target.value)
  }

  // when input is foucsed
  onFocus(event){
    
  }

  // when input isn't focused
  onBlur(event){
    // setTimeout(()=>{
    //   this.setState({dropdownHide: true})
    // }, 500)
    // this.setState({dropdownHide: true})
  }

  // clear string in input and hide clear btn
  clear(){
    this.setState({inputValue: ""});
    this.setState({clearHide: true})
    this.setState({dropdownHide: true})
  }

  // update dropdown block
  updateDropdown(input){
    var filter = this.state.arrayType.filter(v=>{
      if (v.name.indexOf(input)>=0){
        return v
      }
      return 0
    })
    // console.log('current filter', this.state.inputValue, filter)
    if(filter.length === this.state.arrayType.length){
      this.setState({dropdownHide: true})
    } else if (filter.length >0){
      this.setState({dropdownHide: false})
    }
    this.setState({outputlist: filter})
  }

  // click search button
  search(){
  //  this.props.updateInput(this.state.inputValue)
  var filter = this.state.arrayType.filter(v=>{
    if (v.name.indexOf(this.state.inputValue)>=0){
      return v
    }
    return 0
  })
 
  this.props.updateCurrentList(filter)
  }
  suggestionSearch(input){
    var filter = this.state.arrayType.filter(v=>{
      if (v.name.indexOf(input)>=0){
        return v
      }
      return 0
    })
   
    this.props.updateCurrentList(filter)
    this.setState({dropdownHide: true})
  }
  render(){
    const outputlist = this.state.outputlist.map((v, idx)=>{
      return <DropdownUnit key={v.id} text = {v.name} fastSearch = {this.suggestionSearch}/>
    })
    return (
      <div className="input-layout">
        <div className="input-component">
          <input type="text" ref={this.textInput} value={this.state.inputValue} onFocus={this.onFocus} onBlur={this.onBlur} onChange={this.handleChange}></input>
          <button onClick={this.search}>
            查詢
          </button>
          <div className={`clear ${this.state.clearHide?'hide':''}`} onClick={this.clear}>
            <span>清除</span>
          </div>
          
          <div className={`dropdown-block ${this.state.dropdownHide?'hide':''}`}>
           {outputlist}
          </div>
        </div>
      </div>
     
    );
  } 
}

export default input;
