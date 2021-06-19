import React, { Component } from 'react';
import GameLinkResult from './GameLinkResult.jsx'
import Loading from './Loading.jsx'

class GameLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedAppid: 0,
    };
  }
  
  componentDidMount(){
    this.props.storeData(this.props.imgurl[0]);
    this.state.fetchedAppid = this.props.imgurl[0]
  }

  render() {
    let checker = [];
    if(this.state.fetchedAppid !== this.props.imgurl[0]){
      checker.push(
        <div className = 'beforeResult'>
      <Loading/>
        </div>
      )
    }else{
      checker.push(<GameLinkResult imgurl={this.props.imgurl} data={this.props.data}/>)
    }

 
    return (
      <div>
        {checker}
      </div>
    );
  }
}

export default GameLink;
