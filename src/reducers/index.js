import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import song from '../reducers/song';

const rootReducer = combineReducers({
  song,
  router: routerReducer
});

export default rootReducer;
