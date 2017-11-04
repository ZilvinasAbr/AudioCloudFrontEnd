import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {CURRENT_USER_URL} from '../constants/ApiConstants';
import * as api from '../apiService';
import {userSchema} from '../constants/Schemas';

export const fetchUsersSuccess = entities => ({
  type: types.FETCH_USERS_SUCCESS,
  entities
});

export const fetchCurrentUserSuccess = id => ({
  type: types.FETCH_CURRENT_USER_SUCCESS,
  id
});

export const fetchCurrentUser = () => async dispatch => {
  try {
    const response = await api.get(CURRENT_USER_URL, {authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result: id} = normalize(json, userSchema);

    // dispatch(fetchCurrentUserSuccess(id));
    dispatch(fetchUsersSuccess(entities));
    dispatch(fetchCurrentUserSuccess(id));
  } catch (err) {
    console.error('Could not fetch a song', err);
  }
};
