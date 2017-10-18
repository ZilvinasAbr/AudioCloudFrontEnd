import React from 'react';
import {
  Route
} from 'react-router-dom';

import PrivateRoute from './helpers/PrivateRoute';
import Layout from './layout/Layout';
import Authenticate from './auth/Authenticate';
import Landing from './landing/Landing';
import Playlist from './playlist/Playlist';
import NewsFeed from './newsFeed/NewsFeed';
import Library from './library/Library';
import Genres from './genres/Genres';
import SongContainer from './song/SongContainer';

const App = () => (
  <div>
    <Route exact path="/" component={Landing}/>
    <Layout>
      <PrivateRoute path="/song/:id" component={SongContainer}/>
      <PrivateRoute path="/home" component={NewsFeed}/>
      <PrivateRoute path="/playlist" component={Playlist}/>
      <PrivateRoute path="/newsFeed" component={NewsFeed}/>
      <PrivateRoute path="/genres" component={Genres}/>
      <PrivateRoute path="/library" component={Library}/>
    </Layout>
    <Route path="/authenticate" component={Authenticate}/>
  </div>
);

export default App;
