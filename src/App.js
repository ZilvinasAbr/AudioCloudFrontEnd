import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import PrivateRoute from './helpers/PrivateRoute';
import Authenticate from './auth/Authenticate';
import Landing from './landing/Landing';
import Playlist from './playlist/Playlist';
import NewsFeed from './newsFeed/NewsFeed';
import Library from './library/Library';
import Genres from './genres/Genres';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing}/>
      <PrivateRoute path="/home" component={Playlist}/>
      <PrivateRoute path="/newsFeed" component={NewsFeed}/>
      <PrivateRoute path="/genres" component={Genres}/>
      <PrivateRoute path="/library" component={Library}/>
      <Route path="/authenticate" component={Authenticate}/>
    </div>
  </Router>
);

export default App;
