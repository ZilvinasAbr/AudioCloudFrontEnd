import * as types from '../constants/ActionTypes';

const initialState = [];

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LATEST_EVENTS:
      return action.eventIds;
    case types.LOGOUT:
      return [];
    default:
      return state;
  }
}