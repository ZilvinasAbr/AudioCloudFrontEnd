import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {SONG_STREAM_URL} from '../constants/ApiConstants';

const audio = (InnerComponent) => {
  class AudioComponent extends Component {
    audioElement = null;

    componentDidMount() {
      const { audioElement } = this;
      audioElement.play();
    }

    onPlay = () => {
      const { onPlay } = this.props;
      onPlay();
    };

    onPause = () => {
      const { onPause } = this.props;
      onPause();
    };

    togglePlay = () => {
      const { audioElement } = this;
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    };

    render() {
      const {audioUrl} = this.props;

      return (
        <div>
          <audio
            id="audio"
            onPause={this.onPause}
            onPlay={this.onPlay}
            ref={node => this.audioElement = node}
            src={SONG_STREAM_URL.replace(':songPath', audioUrl)}
          />
          <InnerComponent
            {...this.state}
            {...this.props}
            togglePlay={this.togglePlay}
          />
        </div>
      );
    }
  }

  AudioComponent.propTypes = {
    audioUrl: PropTypes.string.isRequired,
    onPause: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired
  };

  return AudioComponent
};

export default audio;