import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    stuff: []
  };

  async componentDidMount() {
    const url = 'https://saitynoprojektas.azurewebsites.net/api/values';
    const myInit = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };
    const response = await fetch(url, myInit);
    const json = await response.json();
    this.setState({ stuff: json });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AudioCloud! 17:03</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{this.state.stuff[0]}</div>
      </div>
    );
  }
}

export default App;
