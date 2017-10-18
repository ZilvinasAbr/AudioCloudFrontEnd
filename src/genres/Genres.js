import React from 'react';
import {Container} from 'semantic-ui-react';

import GenresTab from './GenresTab';

import {genresWithSongs} from '../mockData/mockGenres';

const Genres = () => (
  <Container>
    <GenresTab
      genresWithSongs={genresWithSongs}
    />
  </Container>
);

export default Genres;
