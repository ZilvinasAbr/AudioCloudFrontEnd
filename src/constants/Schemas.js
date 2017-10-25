import { schema } from 'normalizr';

const genre = new schema.Entity('genres');
const song = new schema.Entity('songs');
const user = new schema.Entity('users');
const playlist = new schema.Entity('playlists');
const event = new schema.Entity('events');

song.define({
  user,
  genre
});

genre.define({
  songs: [song]
});

playlist.define({
  songs: [song]
});

event.define({
  song,
  user
});

export const songSchema = song;
export const genreSchema = genre;
export const playlistSchema = playlist;
export const userSchema = user;
export const eventSchema = event;