import React, { Component } from 'react';
import { connect } from 'react-redux';

import SteamContainer from './SteamContainer.jsx';

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SteamContainer user = {this.props.user}/>
      </div>
    );
  }
}

export default MainContainer;
