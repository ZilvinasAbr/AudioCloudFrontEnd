import {getBackEndUrl} from './environmentConfig';

export function get(url, {headers, authorized} = {}) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'GET',
    headers: headers || {},
    mode: 'cors',
    cache: 'default'
  };

  if (authorized) {
    const accessToken = localStorage.getItem('access_token');
    params.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return fetch(`${baseUrl}${url}`, params);
}

export function post(url, {body, authorized}) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  };

  setAccessToken(params, authorized);

  return fetch(`${baseUrl}${url}`, params);
}

export function postFile(url, {file, authorized}) {
  const baseUrl = getBackEndUrl();

  let formData = new FormData();

  formData.append('toUpload', file);

  const params = {
    method: 'POST',
    headers: {},
    body: formData,
    mode: 'cors',
    cache: 'default'
  };

  setAccessToken(params, authorized);

  return fetch(`${baseUrl}${url}`, params);
}

export function del(url, {body, authorized}) {
  const baseUrl = getBackEndUrl();

  const params = {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    cache: 'default'
  };

  setAccessToken(params, authorized);

  return fetch(`${baseUrl}${url}`, params);
}

function setAccessToken(params, authorized) {
  if (authorized) {
    const accessToken = localStorage.getItem('access_token');
    params.headers['Authorization'] = `Bearer ${accessToken}`;
  }
}

export default {
  get,
  post,
  del
};
