import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {songSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';

export const getCurrentSongId = state => state.player.currentSong;

export const getCurrentSong = createSelector(
  getEntities,
  getCurrentSongId,
  (entities, songId) => songId ? denormalize(songId, songSchema, entities) : null
);
