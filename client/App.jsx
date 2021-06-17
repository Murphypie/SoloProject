import React, { Component } from 'react';
import './stylesheets/styles.css'
import MainContainer from './containers/MainContainer.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
       <MainContainer />
     </div>
    );
  }
}

export default App;
