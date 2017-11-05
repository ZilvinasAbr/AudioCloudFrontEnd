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
  getPlaylist,
  (entities, songId, playlist) => {
    if (!playlist)
      return null;
    if (!songId) {
      const defaultSong = playlist.songs[0];
      return denormalize(defaultSong.id, songSchema, entities);
    }

    return songId in entities.songs ? denormalize(songId, songSchema, entities) : null;
  }
);
