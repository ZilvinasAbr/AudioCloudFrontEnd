import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {songSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';

export const getSongsFoundIds = state => state.search;

export const getSongsFound = createSelector(
  getEntities,
  getSongsFoundIds,
  (entities, songIds) => songIds ? denormalize(songIds, [songSchema], entities) : null
);
