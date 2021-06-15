import React, { Component } from 'react';

class PlayerSummaries extends Component {
  render(){
    return(
      <div>
        <img src={this.props.profilePic}></img>
        <h1>Welcome {this.props.profileName}</h1>
      </div>
    )
  }
}


export default PlayerSummaries;