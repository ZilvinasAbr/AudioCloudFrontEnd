import * as types from '../constants/ActionTypes';

const initialState = {
  liked: null,
  uploaded: null,
  playlists: null
};

export default function library(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LIKED_PLAYLIST_SUCCESS:
      const {
        playlistName: name,
        playlistDescription: description,
        playlistIsPublic: isPublic,
        songIds,
        userId} = action;
      return {
        ...state,
        liked: {
          name,
          description,
          isPublic,
          songIds,
          userId
        }
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
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}