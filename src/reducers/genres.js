import * as types from '../constants/ActionTypes';

const initialState = {
  genres: [],
  activeGenre: null,
  genreSongIds: {}
};

export default function genres(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.genres
      };
    case types.FETCH_GENRE_SONG_IDS:
      return {
        ...state,
        genreSongIds: {
          [action.genreName]: action.songIds
        }
      };
    case types.SET_ACTIVE_GENRE:
      return {
        ...state,
        activeGenre: action.activeGenre
      };
    case types.LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
}