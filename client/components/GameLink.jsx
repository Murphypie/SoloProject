import React, { Component } from 'react';


class GameLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedGameDetails: {},
    };

  }
  componentDidMount(){
    let cache = {};
    let appid = this.props.imgurl[0];
    fetch(`${this.props.imgurl[0]}`)
    .then((res) => res.json())
    .then((res) => {
      cache = JSON.parse(res.gameDetails);
      this.setState({ fetchedGameDetails: cache[appid].data});
    });
  }

  render() {
    let url ='http://media.steampowered.com/steamcommunity/public/images/apps/' + this.props.imgurl[0] + '/' + this.props.imgurl[1] +'.jpg';
    let score = this.state.fetchedGameDetails.metacritic;
    return (
      <div >
        <img src={url}></img>
        {/* <p1>{this.state.fetchedGameDetails.about_the_game}</p1> */}
        <p>{this.state.fetchedGameDetails.detailed_description}</p>
        {/* <p>{this.state.fetchedGameDetails.metacritic}</p> */}
      </div>
    );
  }
}

export default GameLink;
