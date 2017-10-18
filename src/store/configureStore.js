import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware as createRouterMiddleware} from 'react-router-redux';
import rootReducer from '../reducers/index';

export default function configureStore({initialState, history}) {
  const routerMiddleware = createRouterMiddleware(history);

  const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(thunkMiddleware, routerMiddleware)));

  return store;
}
