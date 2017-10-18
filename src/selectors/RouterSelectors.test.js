import {getSongId} from './RouterSelectors';

describe('getSongId', () => {
  it('gets song id from path', () => {
    const state = {
      router: {
        location: {
          pathname: '/song/1'
        }
      }
    };

    const result = getSongId(state);

    expect(result).toBe(1);
  })
});