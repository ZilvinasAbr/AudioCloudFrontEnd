import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {songSchema, playlistSchema} from "../constants/Schemas";
import {getEntities} from './CommonSelectors';

export const getLikedPlaylistSongIds = state => state.library.liked.songs;
export const getUploadedIds = state => state.library.uploaded;
export const getPlaylistIds = state => state.library.playlists;

export const getLikedPlaylistWithSongIds = state => state.library.liked;

export const getLikedPlaylist = createSelector(
  getEntities,
  getLikedPlaylistWithSongIds,
  (entities, playlistWithSongIds) => {
    if (!playlistWithSongIds)
      return null;

    const songs = denormalize(playlistWithSongIds.songIds, [songSchema], entities);

    return {
      ...playlistWithSongIds,
      songs
    };
  }
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