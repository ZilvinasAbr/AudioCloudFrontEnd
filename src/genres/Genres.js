import React from 'react';
import {Container} from 'semantic-ui-react';

import GenresTab from './GenresTab';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import mockUsers from '../mockData/mockUsers';
import {genresWithSongs} from '../mockData/mockGenres';

const Genres = () => (
  <div>
    <Header
      userName={mockUsers[0].userName}
    />
    <Container>
      <GenresTab
        genresWithSongs={genresWithSongs}
      />
    </Container>
    <Footer/>
  </div>
);

export default Genres;
