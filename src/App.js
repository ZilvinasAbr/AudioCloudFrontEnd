import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Authenticate from './Authenticate';
import Landing from './landing/Landing';
import Playlist from './playlist/Playlist';
import NewsFeed from './newsFeed/NewsFeed';
import Authentication from './auth/Authentication';

const App = () => (
  <Router>
    <div>
      <Authentication>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route path="/home" component={Playlist}/>
          <Route path="/newsFeed" component={NewsFeed}/>
        </div>
      </Authentication>
      <Route path="/authenticate" component={Authenticate}/>
    </div>
  </Router>
);

export default App;
