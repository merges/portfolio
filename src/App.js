import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import skully from './skully.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Future portfolio. Open and make changes to <code>src/App.js</code> and save to reload.
        </p>
        <img src={skully}  alt="logo" />
      </div>
    );
  }
}

export default App;
