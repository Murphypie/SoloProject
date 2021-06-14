import React, { Component } from 'react';

class GamesSummaries extends Component {
  render() {
    console.log(this.props.games.length)
    const gameCache = [];
    // for (let i = 0; i < this.props.games; i++) {
    //   gameCache.push(this.state.games[i]);
    // }
    //console.log(this.props.games[0]);
    return (
      <div>
        <h1> Who know?</h1>
      </div>
    );
  }
}

export default GamesSummaries;
