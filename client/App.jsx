import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Library from './gamelibrary';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Library">Library</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Library">
            <Library />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}


export default App;
