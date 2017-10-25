import React from 'react';
import {connect} from 'react-redux';

import Genres from './Genres';

import {fetchGenreSongs} from '../actions/SongActions';
import {fetchGenres} from "../actions/GenreActions";
import {getGenres} from '../selectors/GenreSelectors';

const GenresContainer = props => <Genres {...props} />;

const mapStateToProps = (state) => ({
  genres: getGenres(state)
});

export default connect(mapStateToProps, {
  fetchGenres,
  fetchGenreSongs
})(GenresContainer);