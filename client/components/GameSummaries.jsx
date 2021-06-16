import React, { Component } from 'react';
import GamesDetails from './GamesDetails.jsx';
import GameLink from './GameLink.jsx';

class GamesSummaries extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} onClick={()=>{
          this.props.storeId(this.props.appid);
          this.props.storeImgUrl([this.props.appid, this.props.imglogourl])
        }}></img>
      </div>
  
    );
  }
}

export default GamesSummaries;
