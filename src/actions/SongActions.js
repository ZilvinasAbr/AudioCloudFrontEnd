import * as types from '../constants/ActionTypes';

import mockSongs from '../mockData/mockSongs';

export const fetchSongSuccess = (song) => ({
  type: types.FETCH_SONG_SUCCESS,
  song
});

export const fetchSong = id => async dispatch => {
  const song = mockSongs[0];

  dispatch(fetchSongSuccess(song));
};