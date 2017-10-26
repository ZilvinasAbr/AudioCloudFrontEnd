import * as types from '../constants/ActionTypes';

const initialState = {
  liked: [],
  uploaded: [],
  playlists: []
};

export default function library(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LIKED_PLAYLIST_SUCCESS:
      return {
        ...state,
        liked: [...action.songIds]
      };
    case types.FETCH_UPLOADED_SONGS_SUCCESS:
      return {
        ...state,
        uploaded: [...action.songIds]
      };
    case types.FETCH_USER_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: [...action.playlistIds]
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
}