import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import * as actions from '../actions/actions.js'

import GameLibraryContainer from './../containers/GameLibraryContainer.jsx';
import GameLink from './../components/GameLink.jsx'
import SteamContainer from './SteamContainer.jsx';

import {SteamContainerCSS} from '../styles/SteamContainerCSS.js'
import HomeText from '../styles/data/Home_Text.png'
import LibraryText from '../styles/data/Library_Text.png'

const mapStateToProps = state => { 
  return{
    appid: state.steam.appid,
    imgurl: state.steam.imgurl,
    data: state.steam.data,
  }
};

const mapDispatchToProps = (dispatch) => ({
  storeAppId: (appId) => dispatch(actions.storeAppIdCreator(appId)),
  storeImgUrl: (payload) => dispatch(actions.storeImgUrlCreator(payload)),
  storeData: (appId) => dispatch(actions.fetchGameDetails(appId)),

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedDetails: {},
      fetchedGames: {},
      fetchedGameDetails: {},
    };
  }

  componentDidMount() {
    let detailsCache = {};
    let cache = {};
    fetch(`../server/data/ownedGames.json`)
      .then((res) => res.json())
      .then((res) => {
        cache = res.response.games;
        this.setState({ fetchedGames: cache});
      });

    fetch('/api')
    .then((res)=>res.json())
    .then((res)=>{
      detailsCache = res.response.players[0];
      this.setState({fetchedDetails: detailsCache});
    })

  }

  render() {
    return (
      <Router>
        <div className = 'mainWebsite'>
          <nav className = 'navPage'>
            <ul>
                <Link to='/'>
                  <img src={HomeText} width="140" height="70"></img>
                </Link>
                <Link to='/Library'>
                  <img src={LibraryText} width="120" height="50"></img>
                </Link>
            </ul>
          </nav>

          <Switch>
            <Route path='/Library'>
              <div className = 'library'>
                <GameLibraryContainer games={this.state.fetchedGames} storeId={this.props.storeAppId} storeImgUrl={this.props.storeImgUrl}/>
              </div>
            </Route>

            <Route path = '/api/gameid'>
              <GameLink appid={this.props.appid} games={this.state.fetchedGames} 
              imgurl={this.props.imgurl} data={this.props.data}
              storeData = {this.props.storeData}
              />
            </Route>

            <Route path='/'>
              <div className="steamContainer">
              <SteamContainerCSS>
                <SteamContainer user={this.state.fetchedDetails}/>
              </SteamContainerCSS>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

//export default MainContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);