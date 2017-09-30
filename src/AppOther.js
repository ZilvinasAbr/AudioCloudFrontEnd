import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

import api from './apiService';
import Auth from './auth/Auth';

class App extends Component {
  state = {
    songs: []
  };

  getParameterByName = (name) => {
    const match = new RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  };

  async componentDidMount() {
    const access_token = this.getParameterByName('access_token');
    console.log('access token:', access_token);

    const response = await api.get('/api/songs/');
    const songs = await response.json();

    this.setState({songs});
  }

  login = () => {
    const auth = new Auth();
    auth.login();
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to AudioCloud! It works!!!</h2>
        </div>
        {this.state.songs.map((song, id) => 
          <div key={id}>{song.title} {song.description}</div>)}
        <Button onClick={this.login}>Login</Button>
      </div>
    );
  }
}

export default App;
