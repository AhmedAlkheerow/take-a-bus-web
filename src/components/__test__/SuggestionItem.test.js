import React from 'react';
import { render } from '@testing-library/react';
import SuggestionItem from '../SuggestionItem';

test('renders the SuggestionItem', () => {
  const props = {
    working_hours: ['0050-2030'],
    originToBusDistance: 0.5,
    originToBusTime: 2,
    tripDistance: 5,
    tripEST: 15,
    plate_number: '545454',
    plate_region: 'Erbil',
  };
  render(<SuggestionItem {...props} />);
});
