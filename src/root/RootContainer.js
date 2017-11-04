import React from 'react';
import { connect } from 'react-redux';

import {fetchCurrentUser} from '../actions/UserActions';
import {getCurrentUser} from '../selectors/UserSelectors';
import Root from './Root';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps, {
  fetchCurrentUser
})(RootContainer);
