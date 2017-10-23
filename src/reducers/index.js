import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import entities from './entities';
import events from './events';
import trendingSongs from './trendingSongs';

const rootReducer = combineReducers({
  entities,
  events,
  trendingSongs,
  router: routerReducer
});

export default rootReducer;
