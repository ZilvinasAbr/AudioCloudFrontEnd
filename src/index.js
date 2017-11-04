import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

ReactDOM.render(
  <Provider store={configureStore({history})}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
