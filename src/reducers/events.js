import * as types from '../constants/ActionTypes';

const initialState = [];

export default function events(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LAST_WEEK_EVENTS_SUCCESS:
      return action.eventIds;
    case types.LOGOUT_SUCCESS:
      return [];
    default:
      return state;
  }
}