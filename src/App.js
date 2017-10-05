import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Authenticate from './Authenticate';
import Landing from './landing/Landing';
// import Home from './home/Home';
import Playlist from './playlist/Playlist';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Playlist}/>
      <Route path="/authenticate" component={Authenticate}/>
    </div>
  </Router>
);

export default App;
