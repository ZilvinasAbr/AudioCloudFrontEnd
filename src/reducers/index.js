import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import entities from './entities';
import events from './events';
import trendingSongs from './trendingSongs';
import genres from './genres';

const rootReducer = combineReducers({
  entities,
  events,
  genres,
  trendingSongs,
  router: routerReducer
});

export default rootReducer;
