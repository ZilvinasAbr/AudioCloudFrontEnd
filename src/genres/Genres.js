import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Container, Loader} from 'semantic-ui-react';

import GenresTab from './GenresTab';

class Genres extends Component {
  async componentDidMount() {
    const {genres, fetchGenres, setActiveGenre} = this.props;
    if (!genres.length) {
      await fetchGenres();
      setActiveGenre(0);
    }
  }

  async componentWillReceiveProps(nextProps) {
    const {activeGenre, genres, fetchGenreSongs} = this.props;
    if (nextProps.activeGenre !== activeGenre) {
      const genreName = genres[nextProps.activeGenre];
      await fetchGenreSongs(genreName);
    }
  }

  onTabChange = async (event, {activeIndex}) => {
    const {setActiveGenre} = this.props;
    setActiveGenre(activeIndex);
  };

  render() {
    const {activeGenre, genres, genreSongs} = this.props;

    if (!genres || !genres || activeGenre === null) {
      return <Loader active/>;
    }

    return (
      <Container style={{
        height: `${window.innerHeight-80-40}px`,
        overflow: 'auto',
        marginTop: '5em',
        marginBottom: '10em'
      }}>
        <GenresTab
          activeGenre={activeGenre}
          genres={genres}
          genreSongs={genreSongs}
          onTabChange={this.onTabChange}
        />
      </Container>
    );
  }
}

Genres.defaultProps = {
  genres: [],
  genreSongs: [],
  activeGenre: null
};

Genres.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genreSongs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeGenre: PropTypes.number,
  fetchGenres: PropTypes.func.isRequired,
  fetchGenreSongs: PropTypes.func.isRequired,
  setActiveGenre: PropTypes.func.isRequired
};

export default Genres;
