import * as types from '../constants/ActionTypes';

export const onLoadedMetadata = duration => ({
  type: types.ON_LOADED_METADATA,
  duration,
});

export const playSongSuccess = id => ({
  type: types.PLAY_SONG_SUCCESS,
  id
});

export const onPlay = () => ({
  type: types.ON_PLAY
});

export const onPause = () => ({
  type: types.ON_PAUSE
});

export const onTimeUpdate = currentTime => ({
  type: types.ON_TIME_UPDATE,
  currentTime,
});

export const playSong = id => async dispatch => {
  dispatch(playSongSuccess(id));
  dispatch(onPlay());
};
