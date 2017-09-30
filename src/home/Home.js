import React from 'react';

import auth from '../auth/auth';

const Home = () => {
  if (!auth.isAuthenticated()) {
    auth.login();
  }

  return (
    <div>Hello</div>
  );
};

export default Home;
