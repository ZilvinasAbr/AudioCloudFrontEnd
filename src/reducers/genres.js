import * as types from '../constants/ActionTypes';

const initialState = [];

export default function genres(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GENRES_SUCCESS:
      return [...action.result];
    case types.LOGOUT:
      return [];
    default:
      return state;
  }
}