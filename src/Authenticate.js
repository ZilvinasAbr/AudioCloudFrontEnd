import React from 'react';
import auth from './auth/auth';
import {Redirect} from 'react-router-dom';

class Authenticate extends React.Component {
  state = {
    isAuthenticated: false
  };

  async componentDidMount() {
    debugger;
    const isAuthenticated = await auth.handleAuthentication();
    this.setState({isAuthenticated});
  }

  render() {
    const {isAuthenticated} = this.state;
    // return isAuthenticated ? <Redirect to={{
    //   pathname: '/home'
    // }}/> : <div/>;
    return <div>Fuck this</div>;
  }
}

export default Authenticate;