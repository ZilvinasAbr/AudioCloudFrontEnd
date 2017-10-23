import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {songSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';
import {getSongId} from '../selectors/RouterSelectors';

const getTrendingSongIds = state => state.trendingSongs;

export const getSong = createSelector(
  getEntities,
  getSongId,
  (entities, id) => (id in entities.songs ? denormalize(id, songSchema, entities) : null)
);

export const getTrendingSongs = createSelector(
  getEntities,
  getTrendingSongIds,
  (entities, trendingSongIds) => denormalize(trendingSongIds, [songSchema], entities)
);
