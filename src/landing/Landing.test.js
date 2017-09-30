import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './Landing';
import renderer from 'react-test-renderer';

describe('Landing Page', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
  });

  it('calls login() of Auth.js if user is not logged in', () => {
    const mockAuth = {

    };
    expect(1).toBe(2);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Landing/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});