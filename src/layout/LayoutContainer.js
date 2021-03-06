import React from 'react';
import {connect} from 'react-redux';

import Layout from './Layout';

import {logout} from '../actions/UserActions';
import {goToSearchSongs} from '../actions/SearchActions';
import {getCurrentUser} from '../selectors/UserSelectors';

const LayoutContainer = props => <Layout {...props} />;

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps, {
  goToSearchSongs,
  logout
})(LayoutContainer);