import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import entities from './entities';
import events from './events';
import popularSongs from './popularSongs';
import genres from './genres';
import library from './library';
import user from './user';
import search from './search';
import player from './player';

const rootReducer = combineReducers({
  entities,
  events,
  genres,
  library,
  popularSongs,
  user,
  search,
  player,
  router: routerReducer
});

export default rootReducer;
