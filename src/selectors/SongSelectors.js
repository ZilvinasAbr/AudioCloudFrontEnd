import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {songSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';
import {getSongId} from '../selectors/RouterSelectors';

const getPopularSongIds = state => state.popularSongs;

export const getSong = createSelector(
  getEntities,
  getSongId,
  (entities, id) => (id in entities.songs ? denormalize(id, songSchema, entities) : null)
);

export const getPopularSongs = createSelector(
  getEntities,
  getPopularSongIds,
  (entities, popularSongIds) => denormalize(popularSongIds, [songSchema], entities)
);
