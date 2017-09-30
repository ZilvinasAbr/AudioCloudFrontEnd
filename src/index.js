import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

// import App from './App';
import Playlist from './playlist/Playlist';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Playlist/>,
  document.getElementById('root'));
registerServiceWorker();
