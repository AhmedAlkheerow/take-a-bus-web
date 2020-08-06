import React from 'react';
import { render } from '@testing-library/react';
import WayLine from '../WayLine';

test('renders the WayLine', () => {
  const way = [
    { id: 0, isStart: true, name: '32 peak' },
    { id: 1, name: 'Italian Village' },
    { id: 2, name: 'Park View' },
    { id: 3, name: 'Naz Naz' },
    { id: 4, name: 'Empire' },
    { id: 5, name: 'Ankawa', isEnd: true },
  ];
  render(<WayLine way={way} />);
});
