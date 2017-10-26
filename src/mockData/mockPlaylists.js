import _times from 'lodash/times';
import mockSongs from './mockSongs';
import mockUsers from './mockUsers';

const playlists = _times(10, i => ({
  name: `Playlist ${i+1}`,
  description: 'Song Description.',
  isPublic: !!i%2,
  user: mockUsers[0],
  songs: mockSongs
}));

export default playlists;