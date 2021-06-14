import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Library from './gamelibrary.jsx';

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
    // Promise.all([
    //   fetch(`/api`),
    //   fetch(`../server/data/ownedGames.json`)
    // ]).then(([res1, res2])=>{
    //   res1 => res1.json();
    //   res2 => res2.json();
    // }).then(([res1, res2])=>{
    //   detailsCache = res1.response.players[0];
    //   this.setState({fetchedDetails: detailsCache})
    //   gameCache = res2.response.games;
    //   this.setState({ fetchedGames: gameCache});
    // })
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
              <Library games={this.state.fetchedGames} />
            </Route>
            <Route path='/'>
              <MainContainer/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
