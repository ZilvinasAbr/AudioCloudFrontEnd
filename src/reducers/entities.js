import {merge, cloneDeep} from 'lodash';
import * as types from '../constants/ActionTypes';

const initialState = {
  events: {},
  genres: {},
  playlists: {},
  songs: {},
  users: {}
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  switch (action.type) {
    case types.ADD_SONG_TO_PLAYLIST:
      return addSongToPlaylist(state, action);
    case types.REMOVE_SONG_FROM_PLAYLIST:
      return removeSongFromPlaylist(state, action);
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        playlists: {}
      };
    default:
      return state;
  }
}

function addSongToPlaylist(state, action) {
  const nextState = cloneDeep(state);
  const playlist = nextState.playlists[action.playlistId];
  playlist.songs.push(action.songId);

  return nextState;
}

function removeSongFromPlaylist(state, action) {
  const nextState = cloneDeep(state);
  const playlist = nextState.playlists[action.playlistId];
  playlist.songs = playlist.songs.filter(s => s !== action.songId);

  return nextState;
}