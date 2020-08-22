import React from 'react';
import { render } from '@testing-library/react';
import FromDestinationForm from '../FromDestinationForm';

const stub = () => {};
test('The FromDestinationForm is rendering', () => {
  render(
    <FromDestinationForm
      searchFrom={'home'}
      searchDestination={'work'}
      updateSearchFrom={stub}
      updateSearchDestination={stub}
      clearInputDestination={stub}
      clearInputFrom={stub}
    />
  );
});
