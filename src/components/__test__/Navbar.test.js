import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../Navbar';
import { MockProvider as AuthProvider } from '../../providers/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the navbar', () => {
  let { container } = render(
    <Router>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    </Router>
  );
  const navbarContainer = container.querySelector('div');
  expect(navbarContainer).toBeInTheDocument();
});
