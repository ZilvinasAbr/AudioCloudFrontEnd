import React from 'react';
import {Button, Header, Image, Segment} from 'semantic-ui-react';

import mockSongs from '../mockData/mockSongs';

const Uploaded = () => (
  <Segment>
    <Header as='h2'>Songs Uploaded</Header>
    <Segment.Group horizontal>
      {
        mockSongs.map((song, i) => (
          <Segment key={i}>
            <Image size='tiny' src={song.pictureUrl}/>
            <Header as='h5'>{song.title}</Header>
          </Segment>
        ))
      }
    </Segment.Group>
    <Button>Show All</Button>
  </Segment>
);

export default Uploaded;