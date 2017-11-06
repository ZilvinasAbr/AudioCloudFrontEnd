import * as types from '../constants/ActionTypes';

const initialState = {
  currentSong: null
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case types.PLAY_SONG_SUCCESS:
      return {
        ...state,
        currentSong: action.id
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}