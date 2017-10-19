import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {SONG_URL} from '../constants/ApiConstants';
import * as api from '../apiService';
import {songSchema} from '../constants/Schemas';

// import mockSongs from '../mockData/mockSongs';

export const fetchSongSuccess = entities => ({
  type: types.FETCH_SONG_SUCCESS,
  entities
});

export const fetchSong = id => async dispatch => {
  try {
    const response = await api.get(SONG_URL.replace(':id', id));
    const json = await response.json();

    const {entities} = normalize(json, songSchema);

    dispatch(fetchSongSuccess(entities));
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
