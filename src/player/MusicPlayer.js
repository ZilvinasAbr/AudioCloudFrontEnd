import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Progress,
  Segment
} from 'semantic-ui-react';

import audio from './audio';

const MusicPlayer = ({isPlaying, togglePlay}) => (
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
        name={isPlaying ? 'pause' : 'play'}
        size='large'
        onClick={togglePlay}
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

MusicPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  togglePlay: PropTypes.func.isRequired
};

export default audio(MusicPlayer);