import React from 'react';
import LocateMeBtn from '../LocateMeBtn';
import { render } from '@testing-library/react';

// Snapshot test
test('Locate me button is rendered', () => {
  render(<LocateMeBtn />);
});
