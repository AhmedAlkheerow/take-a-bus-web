import React from 'react';
import { render } from '@testing-library/react';
import SuggestionItem from '../SuggestionItem';

test('renders the SuggestionItem', () => {
  render(<SuggestionItem />);
});

test('renders the SuggestionItem props', () => {
  const busNo = '5555444455';
  const origin = 'Shop';
  const destination = 'Home';
  const duration = '5:00 PM - 6:00 PM';

  const { getByTestId } = render(
    <SuggestionItem
      origin={origin}
      busNo={busNo}
      destination={destination}
      duration={duration}
    />
  );
  const bunNoDiv = getByTestId('bus-no');
  expect(bunNoDiv.textContent).toEqual(`Bus No. (${busNo})`);
  const originDiv = getByTestId('origin');
  expect(originDiv.textContent).toEqual(origin);
  const destinationDiv = getByTestId('destination');
  expect(destinationDiv.textContent).toEqual(destination);
  const durationDiv = getByTestId('duration');
  expect(durationDiv.textContent).toEqual(duration);
});
