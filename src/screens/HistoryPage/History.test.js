import React from 'react';
import renderer from 'react-test-renderer';
import History from './History';

test('renders History UI correctly', () => {
  const tree = renderer.create(<History />).toJSON();
  expect(tree).toMatchSnapshot();
});
