import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import entities from './entities';
import events from './events';
import popularSongs from './popularSongs';
import genres from './genres';

const rootReducer = combineReducers({
  entities,
  events,
  genres,
  popularSongs,
  router: routerReducer
});

export default rootReducer;
