import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Grid,
  Menu
} from 'semantic-ui-react';

import * as styles from '../styles';
import MainButton from '../common/MainButton';
import Slider from './Slider';
import audio from './audio';
import SongInfo from './SongInfo';

const playerStyle = {
  'backgroundColor': styles.playerBackground
};

const MusicPlayer =
  ({
     isPlaying,
     togglePlay,
     changeCurrentTime,
     onLoadedMetadata,
     currentTime,
     duration,
     currentSong
   }) => (
    <Menu fixed='bottom' style={playerStyle}>
      <Grid columns={2}>
        <Grid.Column width={4}>
          <Menu.Item>
            <Button.Group>
              <MainButton icon='step backward'/>
              <MainButton
                icon={isPlaying ? 'pause' : 'play'}
                onClick={togglePlay}
              />
              <MainButton icon='step forward'/>
              <MainButton icon='volume up'/>
            </Button.Group>
          </Menu.Item>
        </Grid.Column>
        <Grid.Column width={10}>
          <Menu.Item>
            <Slider
              value={currentTime}
              max={duration}
              onChange={changeCurrentTime}
            />
          </Menu.Item>
        </Grid.Column>
      </Grid>
    </Menu>
  );

MusicPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  togglePlay: PropTypes.func.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  changeCurrentTime: PropTypes.func.isRequired
};

export default audio(MusicPlayer);