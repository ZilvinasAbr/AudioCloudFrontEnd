import React from 'react';
import PropTypes from 'prop-types';
import {Tab} from 'semantic-ui-react';

import GenrePane from './GenrePane';

const getPane = genreWithSongs => ({
  menuItem: genreWithSongs.genreName,
  render: () => <GenrePane songs={genreWithSongs.songs}/>
});

const getPanes = genresWithSongs => genresWithSongs.map(getPane);

const GenresTab = ({genresWithSongs}) => (
    <Tab menu={{secondary: true, pointing: true}} panes={getPanes(genresWithSongs)}/>
);

GenresTab.propTypes = {
  genresWithSongs: PropTypes.arrayOf(
    PropTypes.shape({
      genreName: PropTypes.string.isRequired,
      songs: PropTypes.array.isRequired
    })
  ).isRequired
};

export default GenresTab;
