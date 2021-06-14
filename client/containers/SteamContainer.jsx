import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerSummaries from '../components/PlayerSummaries.jsx'

const mapStateToProps = (state) => {
  return {
    playerSummaries: state.library.playerSummaries,
    gamesOwned: state.library.gamesOwned,
  };

};

class SteamContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedDetails: {},
    }
  }

  componentDidMount(){
    let cache = {};
    fetch(`/api`)
    .then(res=>res.json())
    .then(res=>{
      cache = res.response.players[0];
      //console.log(cache)
      this.setState({fetchedDetails: cache})
    });
  }

  render(){
    const{steamid, personaname, avatarfull} = this.state.fetchedDetails;
    return(
        <PlayerSummaries steamid={steamid} profileName={personaname} profilePic={avatarfull}/>
    );
  }
}

export default SteamContainer;
