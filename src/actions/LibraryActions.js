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

export const fetchLikedPlaylist = amount => async dispatch => {
  try {
    const likedPlaylistUrl = amount ? `${LIKED_PLAYLIST_URL}/${amount}` : LIKED_PLAYLIST_URL;

    const response = await api.get(likedPlaylistUrl, {authorized: true});
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

export const fetchUploadedSongs = (userName, amount) => async dispatch => {
  try {
    const userSongsUrl = amount ? `${USER_SONGS_URL}/${amount}` : USER_SONGS_URL;

    const response = await api.get(userSongsUrl.replace(':userName', userName), {authorized: true});
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

export const fetchUserPlaylists = (userName, amount)=> async dispatch => {
  try {
    const userPlaylistsUrl = amount ? `${USER_PLAYLISTS_URL}/${amount}` : USER_PLAYLISTS_URL;

    const response = await api.get(userPlaylistsUrl.replace(':userName', userName), {authorized: true});
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
