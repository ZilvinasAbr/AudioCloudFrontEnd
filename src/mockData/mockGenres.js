import {getGenreSongs} from './mockSongs';

const genres = [
  "Genre 1",
  "Genre 2",
  "Genre 3",
  "Genre 4",
  "Genre 5",
  "Genre 6",
  "Genre 7"
];

export const genresWithSongs = genres.map(genre => ({
  genreName: genre,
  songs: getGenreSongs(genre)
}));

export default genres;