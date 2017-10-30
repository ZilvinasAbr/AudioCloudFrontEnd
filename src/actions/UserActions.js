import * as types from '../constants/ActionTypes';

export const fetchUsersSuccess = entities => ({
  type: types.FETCH_USERS_SUCCESS,
  entities
});

export const fetchCurrentUser = () => async dispatch => {
  console.log('FETCH CURRENT USER');
};
