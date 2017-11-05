import {createSelector} from 'reselect';

const getPathname = state => state.router.location.pathname;

export const getSongId = createSelector(
  getPathname,
  pathname => parseInt(pathname.split('/')[3], 10)
);

export const getPlaylistSongId = createSelector(
  getPathname,
  pathname => parseInt(pathname.split('/')[4], 10)
);

export const getPlaylistId = getSongId;

export const getSearchQuery = createSelector(
  getPathname,
  pathname => pathname.split('/')[3]
);
