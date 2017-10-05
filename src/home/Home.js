import React from 'react';

import auth from '../auth/auth';

const Home = () => {
  if (!auth.isAuthenticated()) {
    auth.login();
    return <div></div>;
  }

  return (
    <div>
      <div>Hello</div>
      <button onClick={auth.logout}>Log Out</button>
    </div>
  );
};

export default Home;
