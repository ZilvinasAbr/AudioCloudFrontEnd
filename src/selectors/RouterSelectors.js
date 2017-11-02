import {createSelector} from 'reselect';

const getPathname = state => state.router.location.pathname;

export const getSongId = createSelector(
  getPathname,
  pathname => parseInt(pathname.split('/')[2], 10)
);

export const getPlaylistId = getSongId;
