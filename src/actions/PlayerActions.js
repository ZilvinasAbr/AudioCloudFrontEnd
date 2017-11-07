import * as types from '../constants/ActionTypes';

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

export const playSong = id => async dispatch => {
  dispatch(playSongSuccess(id));
  dispatch(onPlay());
};
