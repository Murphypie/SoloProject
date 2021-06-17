import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamesSummaries from './../components/GameSummaries';
import GameLink from './../components/GameLink.jsx'

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleChangeInc = this.handleChangeInc.bind(this);
    this.handleChangeDec = this.handleChangeDec.bind(this);
  }

  handleChangeInc() {
    let number = this.state.counter + 1;
    this.setState({ counter: number });
  }

  handleChangeDec() {
    if (this.state.counter > 1) {
      let number = this.state.counter - 1;
      this.setState({ counter: number });
    }
  }

  render() {
    const gameCache = [];
    for (let i = 0; i < this.props.games.length; i++) {
      gameCache.push( this.props.games[i]);
    }

    const displayCache = [];
    for (let i = (this.state.counter - 1) * 10; i < this.state.counter * 10; i++) {
      let url ='http://media.steampowered.com/steamcommunity/public/images/apps/' + gameCache[i].appid + '/' + gameCache[i].img_logo_url +'.jpg';
      let name = gameCache[i].name;
      displayCache.push(
        <div>
            <Link to={`/api/gameid/${gameCache[i].appid}`} key={i} >
              <GamesSummaries key={gameCache[i].appid} url={url} name={name} appid = {gameCache[i].appid} imglogourl={gameCache[i].img_logo_url}
              storeId = {this.props.storeId} storeImgUrl={this.props.storeImgUrl}
              />
            </Link>
        </div>
      );
    }

    return (
      <div>
        <h1>hello</h1>
        {displayCache}
        <button onClick={this.handleChangeDec}>Previous</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleChangeInc}>Next </button>
      </div>
    );
  }
}

export default Library;
