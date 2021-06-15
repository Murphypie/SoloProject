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
    //console.log(this.state.counter);
    this.setState({ counter: number });
  }

  handleChangeDec() {
    if (this.state.counter > 1) {
      let number = this.state.counter - 1;
      //console.log(this.state.counter);
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
            {/* <Link to='/gameid'> */}
            <Link to={`/gameid/${gameCache[i].appid}`} >
              <GamesSummaries key={i} url={url} name={name} appid = {gameCache[i].appid}/>
              <GameLink key={i} url={url} name={name} appid = {gameCache[i].appid}/>
            </Link>

            {/* <Switch>
              <Route path='bi'>
                <GameLink/>
               <GameLink url={`https://store.steampowered.com/api/appdetails?appids=${gameCache[i].appid}`}/> 
              </Route>
            </Switch> */}
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
