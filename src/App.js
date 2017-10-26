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
import NewsFeedContainer from './newsFeed/NewsFeedContainer';
import LibraryContainer from './library/LibraryContainer';
import GenresContainer from './genres/GenresContainer';
import SongContainer from './song/SongContainer';

const App = () => (
  <div>
    <Route exact path="/" component={Landing}/>
    <Layout>
      <PrivateRoute path={paths.SONG_PATH} component={SongContainer}/>
      <PrivateRoute path={paths.HOME_PATH} component={NewsFeedContainer}/>
      <PrivateRoute path={paths.PLAYLIST_PATH} component={Playlist}/>
      <PrivateRoute path={paths.NEWS_FEED_PATH} component={NewsFeedContainer}/>
      <PrivateRoute path={paths.GENRES_PATH} component={GenresContainer}/>
      <PrivateRoute path={paths.LIBRARY_PATH} component={LibraryContainer}/>
    </Layout>
    <Route path={paths.AUTHENTICATE_PATH} component={Authenticate}/>
  </div>
);

export default App;
