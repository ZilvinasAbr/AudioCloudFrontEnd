import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {songSchema, playlistSchema, userSchema} from '../constants/Schemas';
import * as api from '../apiService';
import {LIKED_PLAYLIST_URL, USER_SONGS_URL, USER_PLAYLISTS_URL} from '../constants/ApiConstants';
import {fetchSongsSuccess} from './SongActions';
import {fetchPlaylistsSuccess} from "./PlaylistActions";
import {fetchUsersSuccess} from "./UserActions";

export const fetchLikedPlaylistSuccess = (playlistName, playlistDescription, playlistIsPublic, userId, songIds) => ({
  type: types.FETCH_LIKED_PLAYLIST_SUCCESS,
  playlistName,
  playlistDescription,
  playlistIsPublic,
  userId,
  songIds
});

export const fetchUploadedSongsSuccess = songIds => ({
  type: types.FETCH_UPLOADED_SONGS_SUCCESS,
  songIds
});

export const fetchUserPlaylistsSuccess = playlistIds => ({
  type: types.FETCH_USER_PLAYLISTS_SUCCESS,
  playlistIds
});

export const fetchLikedPlaylist = () => async dispatch => {
  try {
    const response = await api.get(LIKED_PLAYLIST_URL, {authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities: songEntities, result: songIds} = normalize(json.songs, [songSchema]);
    const {entities: userEntities, result: userId} = normalize(json.user, userSchema);

    const {name: playlistName, description: playlistDescription, isPublic: playlistIsPublic} = json;

    dispatch(fetchSongsSuccess(songEntities));
    dispatch(fetchUsersSuccess(userEntities));
    dispatch(fetchLikedPlaylistSuccess(playlistName, playlistDescription, playlistIsPublic, userId, songIds));
  } catch (err) {
    console.error('Could not fetch liked songs', err);
  }
};

export const fetchUploadedSongs = userName => async dispatch => {
  try {
    const response = await api.get(USER_SONGS_URL.replace(':userName', userName), {authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result} = normalize(json, [songSchema]);

    dispatch(fetchSongsSuccess(entities));
    dispatch(fetchUploadedSongsSuccess(result));
  } catch (err) {
    console.error('Could not fetch user uploaded songs', err);
  }
};

export const fetchUserPlaylists = userName => async dispatch => {
  try {
    const response = await api.get(USER_PLAYLISTS_URL.replace(':userName', userName), {authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result} = normalize(json, [playlistSchema]);

    dispatch(fetchPlaylistsSuccess(entities));
    dispatch(fetchUserPlaylistsSuccess(result));
  } catch (err) {
    console.error('Could not fetch user playlists', err);
  }
};
