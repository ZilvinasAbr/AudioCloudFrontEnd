import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container} from 'semantic-ui-react';

import GenresTab from './GenresTab';

import {genresWithSongs} from '../mockData/mockGenres';

class Genres extends Component {
  async componentDidMount() {
    const {genres, fetchGenres} = this.props;
    if (!genres.length) {
      await fetchGenres();
    }
  }

  async componentWillReceiveProps(nextProps) {
    const {genres, fetchGenreSongs} = this.props;
    if (nextProps.genres.length !== genres.length) {
      const indexGenre = nextProps.genres[0];
      await fetchGenreSongs(indexGenre.name);
    }
  }

  render() {
    return (
      <Container>
        <GenresTab
          genresWithSongs={genresWithSongs}
        />
      </Container>
    );
  }
}

Genres.defaultProps = {
  genres: []
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchGenres: PropTypes.func.isRequired,
  fetchGenreSongs: PropTypes.func.isRequired
};

export default Genres;
