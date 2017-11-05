import * as types from '../constants/ActionTypes';

const initialState = [];

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_SEARCH_SONGS_SUCCESS:
      return action.songIds;
    case types.LOGOUT_SUCCESS:
      return [];
    default:
      return state;
  }
}