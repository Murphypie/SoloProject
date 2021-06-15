import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerSummaries from '../components/PlayerSummaries.jsx'


class SteamContainer extends Component {


  render(){
    const{steamid, personaname, avatarfull} = this.props.user;
    return(
        <PlayerSummaries steamid={steamid} profileName={personaname} profilePic={avatarfull}/>
    );
  }
}

export default SteamContainer;
