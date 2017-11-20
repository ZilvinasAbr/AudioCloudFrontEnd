import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {
  SONG_URL,
  POPULAR_SONGS_URL,
  UPLOAD_SONG_URL
} from '../constants/ApiConstants';
import * as api from '../apiService';
import {songSchema} from '../constants/Schemas';

export const fetchSongsSuccess = entities => ({
  type: types.FETCH_SONGS_SUCCESS,
  entities
});

export const fetchPopularSongsSuccess = popularSongIds => ({
  type: types.FETCH_POPULAR_SONGS_SUCCESS,
  popularSongIds
});

export const fetchSong = id => async dispatch => {
  try {
    const response = await api.get(SONG_URL.replace(':id', id));
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities} = normalize(json, songSchema);

    dispatch(fetchSongsSuccess(entities));
  } catch (err) {
    console.error('Could not fetch a song', err);
  }
};

const shouldFetchSong = (id, state) => {
  const {entities} = state;
  const {songs} = entities;
  const songExists = id in songs;

  return !songExists;
};

export const fetchSongIfNeeded = (id) => (dispatch, getState) => {
  if (shouldFetchSong(id, getState())) {
    dispatch(fetchSong(id));
  }
};

export const fetchPopularSongs = () => async dispatch => {
  try {
    const response = await api.get(POPULAR_SONGS_URL);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result} = normalize(json, [songSchema]);

    dispatch(fetchSongsSuccess(entities));
    dispatch(fetchPopularSongsSuccess(result));
  } catch (err) {
    console.error('Could not fetch popular songs', err);
  }
};

export const uploadSong = data => async dispatch => {
  const body = data;
  try {
    const response = await api.post(UPLOAD_SONG_URL, {body, authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    console.log('Successfully uploaded a song');

  } catch (err) {
    console.error('Could not upload a song', err);
  }
};