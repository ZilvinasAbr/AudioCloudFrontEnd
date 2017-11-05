import React from 'react';
import {connect} from 'react-redux';

import Search from './Search';

import {fetchPopularSongs} from '../actions/SongActions';
import {fetchSearchSongs} from '../actions/SearchActions';
import {getSearchQuery} from '../selectors/RouterSelectors';
import {getSongsFound} from '../selectors/SearchSelectors';
import {getPopularSongs} from '../selectors/SongSelectors';

const SearchContainer = props => <Search {...props} />;

const mapStateToProps = (state) => ({
  query: getSearchQuery(state),
  songsFound: getSongsFound(state),
  popularSongs: getPopularSongs(state)
});

export default connect(mapStateToProps, {
  fetchSearchSongs,
  fetchPopularSongs
})(SearchContainer);