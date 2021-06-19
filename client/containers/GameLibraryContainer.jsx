import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GamesSummaries from './../components/GameSummaries';
import GameLink from './../components/GameLink.jsx'

import RightArrow from './../styles/data/RightArrow.png'
import LeftArrow from './../styles/data/LeftArrow.png'

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleChangeInc = this.handleChangeInc.bind(this);
    this.handleChangeDec = this.handleChangeDec.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  handleChangeInc() {
    if((this.state.counter+1)<Math.floor(this.props.games.length/20)){
      let number = this.state.counter + 1;
      this.setState({ counter: number });
    }else{
      this.setState({ counter: Math.floor(this.props.games.length/20)})
    }
  }

  handleChangeDec() {
    if (this.state.counter > 1) {
      let number = this.state.counter - 1;
      this.setState({ counter: number });
    }
  }

  changePage(event){
    if(event.key === 'Enter'){
      const result = Number(document.getElementById('querycount').value);
      if((result*20 < this.props.games.length)&&(result>1)){
        this.setState({counter: result})
        document.getElementById('querycount').value=''
      }else if(result < 1){
        this.setState({counter: 1})
        document.getElementById('querycount').value=''
      }else{
        this.setState({counter:(Math.floor(this.props.games.length/20))})
        document.getElementById('querycount').value=''
      }
    }
  }

  render() {
    const gameCache = [];
    for (let i = 0; i < this.props.games.length; i++) {
      gameCache.push( this.props.games[i]);
    }

    const displayCache = [];
    for (let i = (this.state.counter - 1) * 20; i < this.state.counter * 20; i++) {
      let url ='http://media.steampowered.com/steamcommunity/public/images/apps/' + gameCache[i].appid + '/' + gameCache[i].img_logo_url +'.jpg';
      let name = gameCache[i].name;
      let counter = i- (this.state.counter - 1)*20;
      let classNameGen = 'gamesdisplay-'+ `${counter}`
      displayCache.push(
        <div className = {classNameGen}>
            <Link to={`/api/gameid/${gameCache[i].appid}`} key={i} >
              <GamesSummaries key={gameCache[i].appid} url={url} name={name} appid = {gameCache[i].appid} imglogourl={gameCache[i].img_logo_url}
              storeId = {this.props.storeId} storeImgUrl={this.props.storeImgUrl}
              />
            </Link>
        </div>
      );

    }

    return (
      <div className = 'libraryMain'>

        <div className = 'headnest'>
            {displayCache}  
            <div></div>
            <div className = 'footnest1'>
            <img src={LeftArrow} onClick={this.handleChangeDec}></img>
            </div>
            <div className = 'footnest2'>
            {/* <h1>{this.state.counter}</h1> */}
            <input type="number" id='querycount' placeholder={this.state.counter} onKeyDown={this.changePage}></input>
            </div>
            <div className = 'footnest3'>
            <img src={RightArrow} onClick={this.handleChangeInc}></img>
            </div>
            <div></div>
        </div>

        {/* <div className = 'footnest'>
            <div className = 'navigatebutton'>
            <img src={LeftArrow} onClick={this.handleChangeDec}></img>
            <h1>{this.state.counter}</h1>
            <img src={RightArrow} onClick={this.handleChangeInc}></img>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Library;
