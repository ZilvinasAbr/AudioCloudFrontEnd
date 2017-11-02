import React from 'react';
import auth from './auth';
import {Redirect} from 'react-router-dom';

class Authenticate extends React.Component {
  state = {
    isAuthenticated: false
  };

  async componentDidMount() {
    console.log('aa');
    debugger;
    const isAuthenticated = await auth.handleAuthentication();
    debugger;
    console.log('isAuthenticated:', isAuthenticated);
    this.setState({isAuthenticated});
  }

  render() {
    const {isAuthenticated} = this.state;
    return isAuthenticated ? <Redirect to={{
      pathname: '/home'
    }}/> : <div/>;
  }
}

export default Authenticate;