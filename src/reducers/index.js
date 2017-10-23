import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import entities from '../reducers/entities';
import trendingSongs from '../reducers/trendingSongs';

const rootReducer = combineReducers({
  entities,
  trendingSongs,
  router: routerReducer
});

export default rootReducer;
