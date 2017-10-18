import React from 'react';
import {
  Grid,
} from 'semantic-ui-react';

import EventsList from './EventsList';
import SongList from '../common/SongList';

import mockSongs from '../mockData/mockSongs';
import mockEvents from '../mockData/mockEvents';

const NewsFeed = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={4}>
        <SongList
          title='Trending'
          songs={mockSongs}
        />
      </Grid.Column>
      <Grid.Column width={12}>
        <EventsList events={mockEvents}/>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default NewsFeed;