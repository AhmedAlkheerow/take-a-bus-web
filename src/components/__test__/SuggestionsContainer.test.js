import React from 'react';
import { render } from '@testing-library/react';
import SuggestionsContainer from '../SuggestionsContainer';
import { MapProvider } from '../../providers/MapProvider';

test('renders the SuggestionsContainer', () => {
  render(
    <MapProvider>
      <SuggestionsContainer suggestions={[]} />
    </MapProvider>
  );
});
