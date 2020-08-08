import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the navbar', () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>
  );
  const navbarContainer = container.querySelector('div');
  expect(navbarContainer).toBeInTheDocument();
});
