import * as urls from '../constants/ApiConstants';
import * as api from '../apiService';

export const isLiked = async songId => {
  const url = urls.IS_SONG_LIKED_URL.replace(':songId', songId);
  try {
    const response = await api.get(url, {authorized: true});
    const json = await response.json();

    if (!response.ok)
      throw new Error(json);

    return json;
  } catch(err) {
    console.error(err);
    return false;
  }
};

export const likeSong = async songId => {
  const url = urls.LIKE_SONG_URL.replace(':songId', songId);
  try {
    const response = await api.post(url, {authorized: true});

    if (!response.ok)
      console.error('Could not like a song');
  } catch(err) {
    console.error(err);
  }
};

export const dislikeSong = async songId => {
  const url = urls.LIKE_SONG_URL.replace(':songId', songId);
  try {
    const response = await api.del(url, {authorized: true});

    if (!response.ok)
      console.error('Could not dislike a song');
  } catch(err) {
    console.error(err);
  }
};
