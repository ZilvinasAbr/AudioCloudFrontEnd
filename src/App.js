import React from 'react';
import {
  Route
} from 'react-router-dom';

import * as paths from './constants/RouterConstants';
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
      <PrivateRoute path={paths.SONG_PATH} component={SongContainer}/>
      <PrivateRoute path={paths.NEWS_FEED_PATH} component={NewsFeed}/>
      <PrivateRoute path={paths.PLAYLIST_PATH} component={Playlist}/>
      <PrivateRoute path={paths.NEWS_FEED_PATH} component={NewsFeed}/>
      <PrivateRoute path={paths.GENRES_PATH} component={Genres}/>
      <PrivateRoute path={paths.LIBRARY_PATH} component={Library}/>
    </Layout>
    <Route path={paths.AUTHENTICATE_PATH} component={Authenticate}/>
  </div>
);

export default App;
