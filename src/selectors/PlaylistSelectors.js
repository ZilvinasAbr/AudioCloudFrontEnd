import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {playlistSchema, songSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';
import {getPlaylistId, getPlaylistSongId} from '../selectors/RouterSelectors';

export const getPlaylist = createSelector(
  getEntities,
  getPlaylistId,
  (entities, id) => id in entities.playlists ? denormalize(id, playlistSchema, entities) : null
);

export const getCurrentSong = createSelector(
  getEntities,
  getPlaylistSongId,
  (entities, songId) => songId in entities.songs ? denormalize(songId, songSchema, entities) : null
);
