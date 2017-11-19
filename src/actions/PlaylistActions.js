import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {
  PLAYLIST_URL,
  ADD_PLAYLIST_URL,
  ADD_SONG_TO_PLAYLIST_URL,
  REMOVE_SONG_FROM_PLAYLIST_URL
} from '../constants/ApiConstants';
import * as api from '../apiService';
import {playlistSchema} from '../constants/Schemas';

export const fetchPlaylistsSuccess = entities => ({
  type: types.FETCH_PLAYLISTS_SUCCESS,
  entities
});

export const fetchCurrentPlaylistSuccess = id => ({
  type: types.FETCH_CURRENT_PLAYLIST_SUCCESS,
  id
});

export const fetchPlaylist = id => async dispatch => {
  try {
    const response = await api.get(PLAYLIST_URL.replace(':id', id), {authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result} = normalize(json, playlistSchema);

    dispatch(fetchPlaylistsSuccess(entities));
    dispatch(fetchCurrentPlaylistSuccess(result));
  } catch (err) {
    console.error('Could not fetch a playlist', err);
  }
};

const shouldFetchPlaylist = (id, state) => {
  const {entities} = state;
  const {playlists} = entities;
  const playlistExists = id in playlists;
  return !playlistExists;
};

export const fetchPlaylistIfNeeded = id => (dispatch, getState) => {
  if (shouldFetchPlaylist(id, getState())) {
    dispatch(fetchPlaylist(id));
  }
};

export const addPlaylist = data => async () => {
  const {name, is, description} = data;
  const body = {
    name,
    isPublic: is === 'public',
    description
  };

  try {
    const response = await api.post(ADD_PLAYLIST_URL, {body, authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    return true;

  } catch (err) {
    console.error('Could not add playlist', err);
    return false;
  }
};

export const addSongToPlaylist = (playlistId, songId) => async dispatch => {
  try {
    const url = ADD_SONG_TO_PLAYLIST_URL
      .replace(':playlistId', playlistId)
      .replace(':songId', songId);

    const response = await api.post(url, {authorized: true});

    console.log('song added');
  } catch (err) {
    console.error('Could not add song to playlist', err);
  }
};

export const removeSongFromPlaylist = (playlistId, songId) => async dispatch => {
  try {
    const url = ADD_SONG_TO_PLAYLIST_URL
      .replace(':playlistId', playlistId)
      .replace(':songId', songId);

    const response = await api.del(url, {authorized: true});
    console.log('song removed');
  } catch (err) {
    console.error('Could not remove song from a playlist', err);
  }
};
