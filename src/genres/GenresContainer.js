import React from 'react';
import {connect} from 'react-redux';

import Genres from './Genres';

import {fetchGenres, fetchGenreSongs, setActiveGenre} from "../actions/GenreActions";
import {getGenres, getGenreSongs, getActiveGenre} from '../selectors/GenreSelectors';

const GenresContainer = props => <Genres {...props} />;

const mapStateToProps = (state) => ({
  genres: getGenres(state),
  genreSongs: getGenreSongs(state),
  activeGenre: getActiveGenre(state)
});

export default connect(mapStateToProps, {
  fetchGenres,
  fetchGenreSongs,
  setActiveGenre
})(GenresContainer);