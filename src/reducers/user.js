import * as types from '../constants/ActionTypes';

const initialState = null;

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CURRENT_USER_SUCCESS:
      return action.id;
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
