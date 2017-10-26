import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {songSchema, playlistSchema} from "../constants/Schemas";
import {getEntities} from './CommonSelectors';

export const getLikedIds = state => state.library.liked;
export const getUploadedIds = state => state.library.uploaded;
export const getPlaylistIds = state => state.library.playlists;

export const getLikedSongs = createSelector(
  getEntities,
  getLikedIds,
  (entities, songIds) => denormalize(songIds, [songSchema], entities)
);

export const getUploadedSongs = createSelector(
  getEntities,
  getUploadedIds,
  (entities, songIds) => denormalize(songIds, [songSchema], entities)
);

export const getUserPlaylists = createSelector(
  getEntities,
  getPlaylistIds,
  (entities, playlistIds) => denormalize(playlistIds, [playlistSchema], entities)
);