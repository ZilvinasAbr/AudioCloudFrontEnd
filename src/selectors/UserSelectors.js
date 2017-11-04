import {denormalize} from 'normalizr';
import {createSelector} from 'reselect';

import {userSchema} from '../constants/Schemas';
import {getEntities} from '../selectors/CommonSelectors';

const currentUserId = state => state.user;

export const getCurrentUser = createSelector(
  getEntities,
  currentUserId,
  (entities, userId) => userId ? denormalize(userId, userSchema, entities) : null
);
