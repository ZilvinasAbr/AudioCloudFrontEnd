import * as types from '../constants/ActionTypes';

const initialState = [];

export default function popularSongs(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POPULAR_SONGS_SUCCESS:
      return action.popularSongIds;
    case types.LOGOUT:
      return [];
    default:
      return state;
  }
}