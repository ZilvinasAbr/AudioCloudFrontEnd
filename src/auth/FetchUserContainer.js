import React from 'react';
import { connect } from 'react-redux';

import {fetchCurrentUser} from '../actions/UserActions';
import {getCurrentUser} from '../selectors/UserSelectors';
import FetchUser from './FetchUser';

const FetchUserContainer = props => <FetchUser {...props} />;

const mapStateToProps = state => ({
  currentUser: getCurrentUser(state)
});

export default connect(mapStateToProps, {
  fetchCurrentUser
})(FetchUserContainer);
