import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {SONG_STREAM_URL} from '../constants/ApiConstants';

const audio = (InnerComponent) => {
  class AudioComponent extends Component {
    audioElement = null;

    componentDidMount() {
      const {audioElement} = this;
      audioElement.play();
    }

    onPlay = () => {
      const {onPlay} = this.props;
      onPlay();
    };

    onPause = () => {
      const {onPause} = this.props;
      onPause();
    };

    onLoadedMetadata = () => {
      const { audioElement, props } = this;
      const { onLoadedMetadata } = props;
      onLoadedMetadata(Math.floor(audioElement.duration));
    };

    onTimeUpdate = () => {
      const {audioElement, props} = this;
      const {onTimeUpdate} = props;
      onTimeUpdate(Math.floor(audioElement.currentTime));
    };

    changeCurrentTime = currentTime => {
      this.audioElement.currentTime = currentTime;
    };

    togglePlay = () => {
      const {audioElement} = this;
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
            onTimeUpdate={this.onTimeUpdate}
            onLoadedMetadata={this.onLoadedMetadata}
            ref={node => this.audioElement = node}
            src={SONG_STREAM_URL.replace(':songPath', audioUrl)}
          />
          <InnerComponent
            {...this.state}
            {...this.props}
            changeCurrentTime={this.changeCurrentTime}
            togglePlay={this.togglePlay}
          />
        </div>
      );
    }
  }

  AudioComponent.propTypes = {
    audioUrl: PropTypes.string.isRequired,
    onPause: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onTimeUpdate: PropTypes.func.isRequired,
    onLoadedMetadata: PropTypes.func.isRequired
  };

  return AudioComponent
};

export default audio;