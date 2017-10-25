import React from 'react';
import PropTypes from 'prop-types';
import {Tab} from 'semantic-ui-react';

import GenreSongsList from './GenreSongsList';

const GenrePane = ({songs}) => (
  <Tab.Pane attached={false}>
    <GenreSongsList songs={songs}/>
  </Tab.Pane>
);

GenrePane.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired
};

export default GenrePane;