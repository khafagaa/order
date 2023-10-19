import React from 'react';
import renderer from 'react-test-renderer';
import Details from './Details';

test('renders Details UI correctly', () => {
  const tree = renderer.create(<Details />).toJSON();
  expect(tree).toMatchSnapshot();
});
