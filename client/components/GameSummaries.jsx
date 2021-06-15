import React, { Component } from 'react';
import GamesDetails from './GamesDetails.jsx';
import GameLink from './GameLink.jsx';

class GamesSummaries extends Component {
  render() {
    return (
      <div>
        {/* <h1> {this.props.name} </h1> */}
        <img src={this.props.url}></img>
      </div>
      // <div className = "GamesDisplay">
      //   <GamesDetails url = {this.props.url} name={this.props.name} appid={this.props.appid}/>
      // </div>
    );
  }
}

export default GamesSummaries;
