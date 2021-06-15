import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GameLibraryContainer from './containers/GameLibraryContainer.jsx';
import GameLink from './components/GameLink.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedDetails: {},
      fetchedGames: {},
    };
  }

  componentDidMount() {
    let detailsCache = {};
    let gameCache = {};
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
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/Library'>Library</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path='/Library'>
              <GameLibraryContainer games={this.state.fetchedGames} />
            </Route>

            <Route path = '/gameid'>
              <GameLink />
            </Route>

            <Route path='/'>
              <MainContainer user={this.state.fetchedDetails}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
