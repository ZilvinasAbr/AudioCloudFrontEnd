import React from 'react';
import {
  Icon,
  Progress,
  Segment
} from 'semantic-ui-react';

const MusicPlayer = () => (
  <Segment>
    <div>
      <Progress percent={50} size='tiny'/>
    </div>
    <Segment textAlign='center'>
      <Icon
        name='step backward'
        size='large'
      />
      <Icon
        name='play'
        size='large'
      />
      <Icon
        name='step forward'
        size='large'
      />
      <Icon
        name='volume up'
        size='large'
      />
    </Segment>
  </Segment>
);

export default MusicPlayer;