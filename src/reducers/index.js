import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import entities from '../reducers/entities';

const rootReducer = combineReducers({
  entities,
  router: routerReducer
});

export default rootReducer;
