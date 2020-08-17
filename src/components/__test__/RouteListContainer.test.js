import React from 'react';
import { render } from '@testing-library/react';
import RouteListContainer from '../RouteListContainer';
import RouteListMap from '../RouteListMap';

test('renders the RouteListContainer', () => {
  render(
    <RouteListContainer>
      <RouteListMap></RouteListMap>
    </RouteListContainer>
  );
});
