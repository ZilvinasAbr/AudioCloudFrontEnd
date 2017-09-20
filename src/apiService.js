import environmentConfig from './environmentConfig';

export function get(url, headers) {
  const baseUrl = environmentConfig[process.env.NODE_ENV].url;

  const params = {
    method: 'GET',
    headers: headers || new Headers(),
    mode: 'cors',
    cache: 'default'
  };

  return fetch(`${baseUrl}${url}`, params);
}

export function post(url, body) {
  const baseUrl = environmentConfig[process.env.NODE_ENV].url;
  
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
