import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Segment
} from 'semantic-ui-react';

import MainButton from '../common/MainButton';
import Slider from './Slider';
import audio from './audio';

const MusicPlayer =
  ({
     isPlaying,
     togglePlay,
     changeCurrentTime,
     onLoadedMetadata,
     currentTime,
     duration
   }) => (
    <Segment>
      <Slider
        value={currentTime}
        max={duration}
        onChange={changeCurrentTime}
      />
      <Segment textAlign='center'>
        <Button.Group>
          <MainButton icon='step backward'/>
          <MainButton
            icon={isPlaying ? 'pause' : 'play'}
            onClick={togglePlay}
          />
          <MainButton icon='step forward'/>
          <MainButton icon='volume up'/>
        </Button.Group>
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