import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {fetchSongsSuccess} from './SongActions';
import {SEARCH_SONGS_URL} from '../constants/ApiConstants';
import * as api from '../apiService';
import {songSchema} from '../constants/Schemas';

export const fetchSearchSongsSuccess = songIds => ({
  type: types.FETCH_SEARCH_SONGS_SUCCESS,
  songIds
});

export const fetchSearchSongs = query => async dispatch => {
  try {
    const response = await api.get(SEARCH_SONGS_URL.replace(':query', query));
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result} = normalize(json, [songSchema]);

    dispatch(fetchSongsSuccess(entities));
    dispatch(fetchSearchSongsSuccess(result));
  } catch (err) {
    console.error('Could not search songs', err);
  }
};
