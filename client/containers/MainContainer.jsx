import React, { Component } from 'react';
import { connect } from 'react-redux';

import SteamContainer from './SteamContainer.jsx';

class MainContainer extends Component {

  render() {
    return (
      <div>
        {/* <h1> ddd </h1> */}
        <SteamContainer />
      </div>
    );
  }
}

export default MainContainer;
