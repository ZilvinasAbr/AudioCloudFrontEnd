import * as types from '../constants/ActionTypes';

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}
