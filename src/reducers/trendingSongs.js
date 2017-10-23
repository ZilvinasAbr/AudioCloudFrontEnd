import * as types from '../constants/ActionTypes';

const initialState = [];

export default function trendingSongs(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TRENDING_SONGS_SUCCESS:
      return action.trendingSongIds;
    case types.LOGOUT:
      return [];
    default:
      return state;
  }
}