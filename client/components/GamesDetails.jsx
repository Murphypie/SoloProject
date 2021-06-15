import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class GamesDetails extends Component {
  render() {
    return (
      <div>
          <h1> {this.props.name} </h1>
          <img src={this.props.url}></img>
      </div>
    );
  }
}

/*
        <Router>
          <h1> {this.props.name} </h1>
          { </Router><Link to = {'/GameLink'}> }
          <Link to={`/api/gameid/${this.props.appid}`} >
            <img src={this.props.url}></img>
          </Link>
           <Switch> 
              <Route path={'/GameLink'} component={GameLink}>  
            <Route path={`/api/gameid/${this.props.appid}`} component={GameLink}>
               <GameLink
                url={`https://store.steampowered.com/api/appdetails?appids=${this.props.appid}`}
              /> 
            </Route>
          </Switch>
        </Router>
*/

export default GamesDetails;
