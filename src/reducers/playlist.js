import * as types from '../constants/ActionTypes';

const initialState = {
  id: null
};

export default function playlist(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CURRENT_PLAYLIST_SUCCESS:
      return {
        ...state,
        id: action.id
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}