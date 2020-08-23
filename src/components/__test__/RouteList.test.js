import React from 'react';
import { render } from '@testing-library/react';
import RouteList from '../RouteList';

test('renders the RouteList', () => {
  render(<RouteList handleSetPath={() => {}} />);
});
