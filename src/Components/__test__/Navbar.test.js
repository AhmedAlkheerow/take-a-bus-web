import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';

test('renders the navbar', () => {
  const { container } = render(<Navbar />);
  const navbarContainer = container.querySelector('div');
  expect(navbarContainer).toBeInTheDocument();
});
