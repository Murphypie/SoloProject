import React, { Component } from 'react';

class PlayerSummaries extends Component {
  render(){
    return(
      <div>
        <h1>Welcome {this.props.profileName}</h1>
      </div>
    )
  }
}


export default PlayerSummaries;