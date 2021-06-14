import React, { Component } from 'react';
import GamesSummaries from './components/GameSummaries';

class Library extends Component {

  render() {
    const gameCache = [];
    for(let i = 0; i<this.props.games.length; i++){
        gameCache.push(this.props.games[i]);
    }
    let first = gameCache[0];
    //console.log(first)
    let url = 'http://media.steampowered.com/steamcommunity/public/images/apps/' + first.appid + '/' + first.img_logo_url + '.jpg';
    //console.log(url)
    //http://media.steampowered.com/steamcommunity/public/images/apps/appid/image_logo_url.jpg
    return (
      <div>
          <h1>hello</h1>
          <img src={url}></img>
      </div>
    );
  }
}

export default Library;
