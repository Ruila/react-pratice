import '../../css/eCommerce.css';
import React, { Component } from 'react';


class dropdownUnit extends Component {
  constructor(props) {
    super(props);
    this.state={ 
     
    }
    this.fastSearch=this.fastSearch.bind(this);
  }
  componentDidMount(){
  }
  fastSearch(){
    this.props.fastSearch(this.props.text)
    console.log('this.pros', this.props.text)
  }
  render(){
    return(
      <div className="drowpUnit-layout" onClick = {this.fastSearch}>
          <h5 onClick = {this.fastSearch}>{this.props.text}</h5>
      </div>
    );
  }
}

export default dropdownUnit;
