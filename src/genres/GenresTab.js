import React from 'react';
import PropTypes from 'prop-types';
import {Tab} from 'semantic-ui-react';

import GenrePane from './GenrePane';

const getPane = (genreName, songs) => ({
  menuItem: genreName,
  render: () => <GenrePane songs={songs}/>
});

const getPanes = ({activeGenre, genres, genreSongs}) => {
  const genreTuples = genres.map(genre => ({
    genreName: genre,
    songs: []
  }));
  genreTuples[activeGenre].songs = genreSongs;

  return genreTuples.map(({genreName, songs}) => getPane(genreName, songs));
};

const GenresTab = ({genres, genreSongs, activeGenre, onTabChange}) => {
  return (
    <Tab
      menu={{secondary: true, pointing: true}}
      panes={getPanes({activeGenre, genres,genreSongs})}
      activeIndex={activeGenre}
      onTabChange={onTabChange}
    />
  );
};

GenresTab.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  genreSongs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  activeGenre: PropTypes.number,
  onTabChange: PropTypes.func.isRequired
};

export default GenresTab;
