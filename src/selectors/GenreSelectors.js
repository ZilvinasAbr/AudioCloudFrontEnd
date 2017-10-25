import {createSelector} from 'reselect';
import {denormalize} from 'normalizr';

import {getEntities} from './CommonSelectors';
import {songSchema} from "../constants/Schemas";

export const getGenres = state => state.genres.genres;
export const getActiveGenre = state => state.genres.activeGenre;
export const getGenreSongIds = state => state.genres.genreSongIds;

export const getGenreSongs = createSelector(
  getEntities,
  getGenres,
  getActiveGenre,
  getGenreSongIds,
  (entities, genreNames, activeGenre, genreSongIds) => {
    const songIds = genreSongIds[genreNames[activeGenre]];
    return denormalize(songIds, [songSchema], entities);
  }
);
