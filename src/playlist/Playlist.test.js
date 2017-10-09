import React from 'react';
import {shallow} from 'enzyme';

import Playlist from './Playlist';

it('renders without crashing', () => {
  shallow(<Playlist/>);
});

