import React, { Component } from 'react';


class GameLink extends Component {
  // componentDidMount(){
  //   fetch(`/api/gameid/${appid}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       cache = res.response.games;
  //       this.setState({ fetchedGames: cache});
  //     });
  // }

  render() {
    return (
      <div >
          <h1>dddd</h1>
          <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default GameLink;
