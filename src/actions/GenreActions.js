import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {GENRES_URL} from '../constants/ApiConstants';
import * as api from '../apiService';
import {genreSchema} from '../constants/Schemas';

export const fetchGenresSuccess = (entities, result) => ({
  type: types.FETCH_GENRES_SUCCESS,
  entities,
  result
});

export const fetchGenres = () => async dispatch => {
  try {
    const response = await api.get(GENRES_URL);
    const json = await response.json();

    const {entities, result} = normalize(json, [genreSchema]);

    dispatch(fetchGenresSuccess(entities, result));
  } catch (err) {
    console.error('Could not fetch a genres', err);
  }
};

