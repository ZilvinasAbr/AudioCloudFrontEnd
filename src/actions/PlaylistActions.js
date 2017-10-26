import * as types from '../constants/ActionTypes';

export const fetchPlaylistsSuccess = entities => ({
  type: types.FETCH_PLAYLISTS_SUCCESS,
  entities
});