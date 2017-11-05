import React from 'react';
import {
  Route
} from 'react-router-dom';

import * as paths from './constants/RouterConstants';
import Private from './Private';
import Authenticate from './auth/Authenticate';
import Landing from './landing/Landing';

const App = () => (
  <div>
    <Route exact path={paths.LANDING_PATH} component={Landing}/>
    <Route path={paths.APP_PATH} component={Private} />
    <Route path={paths.AUTHENTICATE_PATH} component={Authenticate}/>
  </div>
);

export default App;
