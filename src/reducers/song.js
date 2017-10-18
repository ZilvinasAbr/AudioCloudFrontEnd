import * as types from '../constants/ActionTypes';

export default function song(state = {}, action) {
  switch (action.type) {
    case types.FETCH_SONG_SUCCESS:
      return {
        ...state,
        ...action.song
      };
    default:
      return state;
  }
}
