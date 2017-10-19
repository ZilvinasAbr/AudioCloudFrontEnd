import _times from 'lodash/times';

const songs = _times(10, i => ({
  title: 'Song Artist - Song Title (Artist Remix)',
  uploaderName: 'Uploader Name',
  pictureUrl: '/image.png',
  likes: 5000,
  plays: 1000000,
  createdOn: '26th May, 2016',
  description: 'Song Description.'
}));

export const getGenreSongs = genreName => songs.map(song => Object.assign({}, song, {genre: genreName}));

export default songs;