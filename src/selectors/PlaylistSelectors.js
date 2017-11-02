import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {playlistSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';
import {getPlaylistId} from '../selectors/RouterSelectors';

export const getPlaylist = createSelector(
  getEntities,
  getPlaylistId,
  (entities, id) => (id in entities.playlists ? denormalize(id, playlistSchema, entities) : null)
);
