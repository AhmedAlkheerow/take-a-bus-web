import React from 'react';
import LocateMeBtn from '../LocateMeBtn';
import renderer from 'react-test-renderer';

// Snapshot test
test('Locate me button is renderer', () => {
  const tree = renderer.create(<LocateMeBtn />).toJSON();
  expect(tree).toMatchSnapshot();
});
