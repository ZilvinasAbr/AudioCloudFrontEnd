import React from 'react';

import * as paths from './constants/RouterConstants';
import PrivateRoute from './helpers/PrivateRoute';
import LayoutContainer from './layout/LayoutContainer';
import PlaylistContainer from './playlist/PlaylistContainer';
import NewsFeedContainer from './newsFeed/NewsFeedContainer';
import LibraryContainer from './library/LibraryContainer';
import GenresContainer from './genres/GenresContainer';
import SongContainer from './song/SongContainer';
import FetchUserContainer from './auth/FetchUserContainer';
import SearchContainer from './search/SearchContainer';

const Private = () => (
  <FetchUserContainer>
    <LayoutContainer>
      <PrivateRoute path={paths.SONG_PATH} component={SongContainer}/>
      <PrivateRoute path={paths.PLAYLIST_PATH} component={PlaylistContainer}/>
      <PrivateRoute path={paths.HOME_PATH} component={NewsFeedContainer}/>
      <PrivateRoute path={paths.NEWS_FEED_PATH} component={NewsFeedContainer}/>
      <PrivateRoute path={paths.GENRES_PATH} component={GenresContainer}/>
      <PrivateRoute path={paths.LIBRARY_PATH} component={LibraryContainer}/>
      <PrivateRoute path={paths.SEARCH_PATH} component={SearchContainer}/>
    </LayoutContainer>
  </FetchUserContainer>
);

export default Private;