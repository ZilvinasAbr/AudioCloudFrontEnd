import {normalize} from 'normalizr';
import {push} from 'react-router-redux';

import * as types from '../constants/ActionTypes';
import {
  CURRENT_USER_URL,
  REGISTER_USER_URL
} from '../constants/ApiConstants';
import * as api from '../apiService';
import * as paths from '../constants/RouterConstants';
import {userSchema} from '../constants/Schemas';
import auth from '../auth/auth';

export const fetchUsersSuccess = entities => ({
  type: types.FETCH_USERS_SUCCESS,
  entities
});

export const fetchCurrentUserSuccess = id => ({
  type: types.FETCH_CURRENT_USER_SUCCESS,
  id
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const fetchCurrentUser = () => async dispatch => {
  try {
    const response = await api.get(CURRENT_USER_URL, {authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

    const {entities, result: id} = normalize(json, userSchema);

    dispatch(fetchUsersSuccess(entities));
    dispatch(fetchCurrentUserSuccess(id));
  } catch (err) {
    console.error('Could not fetch a song', err);
  }
};

export const registerUser = () => async () => {
  try {
    const response = await api.post(REGISTER_USER_URL, {authorized: true});
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    }

  } catch (err) {
    console.error('Could not register a user', err);
  }
};

export const logout = () => dispatch => {
  auth.logout();
  dispatch(logoutSuccess());
  dispatch(push(paths.LANDING_PATH));
};
