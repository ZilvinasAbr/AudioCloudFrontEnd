import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Progress,
  Segment
} from 'semantic-ui-react';

const MusicPlayer = ({isPlaying, onTogglePlay}) => (
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
        onClick={onTogglePlay}
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
  onTogglePlay: PropTypes.func.isRequired
};

export default MusicPlayer;