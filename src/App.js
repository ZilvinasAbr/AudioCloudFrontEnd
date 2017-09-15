import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import api from './apiService';

class App extends Component {
  state = {
    songs: []
  };

  async componentDidMount() {
    const response = await api.get('/api/song/');
    const songs = await response.json();

    this.setState({songs});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AudioCloud! It works!!!</h2>
        </div>
        {this.state.songs.map((song, id) => 
          <div>{song.title} {song.description}</div>)}
      </div>
    );
  }
}

export default App;
