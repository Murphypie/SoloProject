import React, { Component } from 'react';
import GamesDetails from './GamesDetails.jsx';
import GameLink from './GameLink.jsx';

class GamesSummaries extends Component {
  render() {
    return (
      // <div className ="LibraryGrid">
      <div>
        <img src={this.props.url} onClick={()=>{
          this.props.storeId(this.props.appid);
          this.props.storeImgUrl([this.props.appid, this.props.imglogourl])
        }} id = "gamepics"></img>
        <p id="gameText">{this.props.name}</p>
      </div>
  
    );
  }
}

export default GamesSummaries;
