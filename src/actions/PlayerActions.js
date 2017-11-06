import * as types from '../constants/ActionTypes';
import {getIsPlaying} from '../selectors/PlayerSelectors';

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

export const onTogglePlay = () => (dispatch, getState) => {
  const state = getState();
  const isPlaying = getIsPlaying(state);

  if (isPlaying) {
    dispatch(onPause());
  } else {
    dispatch(onPlay());
  }
};

export const playSong = id => async dispatch => {
  dispatch(playSongSuccess(id));
  dispatch(onPlay());
};
