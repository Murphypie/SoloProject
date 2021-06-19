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


export default GamesDetails;
