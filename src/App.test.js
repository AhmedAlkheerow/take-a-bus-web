import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the map', () => {
  const { container } = render(<App />);
  const mapContainer = container.querySelector('div');
  expect(mapContainer).toBeInTheDocument();
});
