import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navbar from '../Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

const mockStore = configureStore([]);

test('renders the navbar', () => {
  let store = mockStore({
    user: { isSigned: false },
  });
  let { container } = render(
    <Router>
      <Provider store={store}>
        <Navbar />
      </Provider>
    </Router>
  );
  const navbarContainer = container.querySelector('div');
  expect(navbarContainer).toBeInTheDocument();
});
