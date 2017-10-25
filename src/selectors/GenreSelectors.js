import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {genreSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';

const getGenreIds = state => state.genres;

export const getGenres = createSelector(
  getEntities,
  getGenreIds,
  (entities, genreIds) => denormalize(genreIds, [genreSchema], entities)
);
