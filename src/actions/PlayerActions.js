import * as types from '../constants/ActionTypes';

export const playSongSuccess = id => ({
  type: types.PLAY_SONG_SUCCESS,
  id
});

export const playSong = id => async dispatch => {
  dispatch(playSongSuccess(id));
};
