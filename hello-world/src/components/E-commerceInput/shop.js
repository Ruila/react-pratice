import '../../css/eCommerce.css';
import React, { Component } from 'react';


class block extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      
    }
    
  } 
    changeArea(area){
      this.setState({currentArea: area})
  }
  render(){
    return(
      <div className="shop-layout">
        <div className="img">
          <img alt="img" src={this.props.imgurl} />
        </div>
        <div className="text">
          <span>
            {this.props.title}
          </span>
          
        </div>
      </div>
    );
  }
}

export default block;
