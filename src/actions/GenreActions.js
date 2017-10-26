import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {GENRES_URL, GENRE_SONGS_URL} from '../constants/ApiConstants';
import * as api from '../apiService';
import {songSchema} from '../constants/Schemas';
import {fetchSongsSuccess} from './SongActions';

export const fetchGenresSuccess = genres => ({
  type: types.FETCH_GENRES_SUCCESS,
  genres
});

export const fetchGenreSongIdsSuccess = (genreName, songIds) => ({
  type: types.FETCH_GENRE_SONG_IDS,
  genreName,
  songIds
});

export const setActiveGenre = activeGenre => ({
  type: types.SET_ACTIVE_GENRE,
  activeGenre
});

export const fetchGenres = () => async dispatch => {
  try {
    const response = await api.get(GENRES_URL);
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    dispatch(fetchGenresSuccess(json));
  } catch (err) {
    console.error('Could not fetch genres', err);
  }
};

export const fetchGenreSongs = genreName => async dispatch => {
  try {
    const response = await api.get(GENRE_SONGS_URL.replace(':genreName', genreName));
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result} = normalize(json, [songSchema]);

    dispatch(fetchSongsSuccess(entities));
    dispatch(fetchGenreSongIdsSuccess(genreName, result));
  } catch (err) {
    console.error('Could not fetch genre songs', err);
  }
};
