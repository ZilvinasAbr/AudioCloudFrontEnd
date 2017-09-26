import {getBackEndUrl} from './environmentConfig';

export function get(url, headers) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'GET',
    headers: headers || new Headers(),
    mode: 'cors',
    cache: 'default'
  };

  return fetch(`${baseUrl}${url}`, params);
}

export function post(url, body) {
  const baseUrl = getBackEndUrl();
  
    const params = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };
  
    return fetch(`${baseUrl}${url}`, params);
}

export default {
  get,
  post
};
