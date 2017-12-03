import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Segment
} from 'semantic-ui-react';

import Slider from './Slider';
import audio from './audio';
import * as styles from '../styles';

const style = {
  'backgroundColor': styles.secondaryBackground
};

const MusicPlayer =
  ({
     isPlaying,
     togglePlay,
     changeCurrentTime,
     onLoadedMetadata,
     currentTime,
     duration
   }) => (
    <Segment style={style}>
      <Slider
        value={currentTime}
        max={duration}
        onChange={changeCurrentTime}
      />
      <Segment textAlign='center' style={style}>
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
  togglePlay: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  changeCurrentTime: PropTypes.func.isRequired
};

export default audio(MusicPlayer);