import _times from 'lodash/times';

const events = _times(10, i => ({
  uploaderName: 'Uploader Name',
  eventText: 'Posted a Song',
  createdOn: '1 day ago',
  songImageUrl: '/image.png',
  songTitle: 'Song Artist - Song Title (Artist Remix)',
  plays: 1000000,
  likes: 5000
}));

export default events;