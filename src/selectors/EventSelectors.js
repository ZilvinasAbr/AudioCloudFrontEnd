import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {eventSchema} from '../constants/Schemas';
import {getEntities} from './CommonSelectors';

const  getLastWeekEventIds = state => state.events;

export const getLastWeekEvents = createSelector(
  getEntities,
  getLastWeekEventIds,
  (entities, lastWeekEventIds) => denormalize(lastWeekEventIds, [eventSchema], entities)
);
