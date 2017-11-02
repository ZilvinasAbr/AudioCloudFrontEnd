import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import entities from './entities';
import events from './events';
import popularSongs from './popularSongs';
import genres from './genres';
import library from './library';
import user from './user';
import playlist from './playlist';

const rootReducer = combineReducers({
  entities,
  events,
  genres,
  library,
  popularSongs,
  user,
  playlist,
  router: routerReducer
});

export default rootReducer;
