import '../../css/eCommerce.css';
import Shop from './shop.js'
import React, { Component } from 'react';


class content extends Component {
  constructor(props) {
    super(props);
    this.state={ 
      outputlist: []
    }
    this.updateCurrentList=this.updateCurrentList.bind(this);
  } 
  componentDidMount(){
    // initial outputlist
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
    this.setState({outputlist: arrayType});
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.currentList!==this.props.currentList){
      // console.log("inside componentDidUpdate", prevProps.currentList, this.props.currentList)
      this.updateCurrentList(this.props.currentList)
      }
  }
  updateCurrentList(list){
    this.setState({outputlist: list})
  }
  render(){
    const outputlist = this.state.outputlist.map(v=>{
      return <Shop key={v.id} imgurl={v.imgurl} title={v.name} />
    })
    return(
      <div className="content-layout">
         <h5>共有{this.state.outputlist.length}間商店</h5>
        {outputlist}
      </div>
    );
  }
}

export default content;
