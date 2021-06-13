import React, { Component } from 'react';
import { connect } from 'react-redux';

import SteamContainer from './SteamContainer.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SteamContainer />
      </div>
    );
  }
}

export default MainContainer;
