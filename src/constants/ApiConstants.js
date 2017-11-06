import {getBackEndUrl} from "../environmentConfig";

export const SONG_URL = '/api/songs/:id';
export const SEARCH_SONGS_URL = '/api/songs/search/:query';
export const PLAYLIST_URL = '/api/playlists/:id';
export const POPULAR_SONGS_URL = '/api/songs/popular';
export const GENRE_SONGS_URL = '/api/songs/genre/:genreName';
export const LAST_WEEK_EVENTS_URL = '/api/events/lastWeek';
export const GENRES_URL = '/api/genres';
export const LIKED_PLAYLIST_URL = '/api/playlists/liked';
export const USER_SONGS_URL = '/api/songs/user/:userName';
export const USER_PLAYLISTS_URL = '/api/playlists/user/:userName';
export const CURRENT_USER_URL = '/api/users/current';
export const REGISTER_USER_URL = '/api/users/register';
export const SONG_STREAM_URL = `${getBackEndUrl()}/api/files/:songPath`;