import * as types from '../constants/ActionTypes';

const initialState = {
  currentSong: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case types.ON_LOADED_METADATA:
      return {
        ...state,
        duration: action.duration,
      };
    case types.PLAY_SONG_SUCCESS:
      return {
        ...state,
        currentSong: action.id
      };
    case types.ON_PLAY:
      return {
        ...state,
        isPlaying: true
      };
    case types.ON_PAUSE:
      return {
        ...state,
        isPlaying: false
      };
    case types.ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: action.currentTime
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}