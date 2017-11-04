import React from 'react';
import {
  Route
} from 'react-router-dom';

import * as paths from './constants/RouterConstants';
import PrivateRoute from './helpers/PrivateRoute';
import LayoutContainer from './layout/LayoutContainer';
import Authenticate from './auth/Authenticate';
import Landing from './landing/Landing';
import PlaylistContainer from './playlist/PlaylistContainer';
import NewsFeedContainer from './newsFeed/NewsFeedContainer';
import LibraryContainer from './library/LibraryContainer';
import GenresContainer from './genres/GenresContainer';
import SongContainer from './song/SongContainer';

const App = () => (
  <div>
    <Route exact path="/" component={Landing}/>
    <LayoutContainer>
      <PrivateRoute path={paths.SONG_PATH} component={SongContainer}/>
      <PrivateRoute path={paths.PLAYLIST_PATH} component={PlaylistContainer} />
      <PrivateRoute path={paths.HOME_PATH} component={NewsFeedContainer}/>
      <PrivateRoute path={paths.NEWS_FEED_PATH} component={NewsFeedContainer}/>
      <PrivateRoute path={paths.GENRES_PATH} component={GenresContainer}/>
      <PrivateRoute path={paths.LIBRARY_PATH} component={LibraryContainer}/>
    </LayoutContainer>
    <Route path={paths.AUTHENTICATE_PATH} component={Authenticate}/>
  </div>
);

export default App;
