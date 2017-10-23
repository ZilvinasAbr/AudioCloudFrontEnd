import {normalize} from 'normalizr';

import * as types from '../constants/ActionTypes';
import {LAST_WEEK_EVENTS_URL} from '../constants/ApiConstants';
import * as api from '../apiService';
import {eventSchema} from '../constants/Schemas';

export const fetchEventsSuccess = entities => ({
  type: types.FETCH_EVENTS_SUCCESS,
  entities
});

export const fetchLastWeekEventsSuccess = eventIds => ({
  type: types.FETCH_LAST_WEEK_EVENTS_SUCCESS,
  eventIds
});

export const fetchLastWeekEvents = () => async dispatch => {
  try {
    const response = await api.get(LAST_WEEK_EVENTS_URL, {authorized: true});
    const json = await response.json();

    const {entities, result} = normalize(json, [eventSchema]);

    dispatch(fetchEventsSuccess(entities));
    dispatch(fetchLastWeekEventsSuccess(result));
  } catch (err) {
    console.error('Could not fetch last week events', err);
  }
};