import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import Mission from './models/Mission';

test('Has 2 neighbors', () => {
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  const countries = [{ countryKey: 'BRASIL' }, { countryKey: 'PERU' }];

  const has3Neighbours = Mission.hasCommonNeighbours(countries, 3);
  expect(has3Neighbours).toBe(false);
});

test('Has 3 neighbors', () => {
  const countries = [
    { countryKey: 'BRASIL' },
    { countryKey: 'PERU' },
    { countryKey: 'COLOMBIA' },
  ];

  const has3Neighbours = Mission.hasCommonNeighbours(countries, 3);
  expect(has3Neighbours).toBe(true);
});

test('Does not have 3 neighbors', () => {
  const countries = [
    { countryKey: 'BRASIL' },
    { countryKey: 'PERU' },
    { countryKey: 'SAHARA' },
  ];

  const has3Neighbours = Mission.hasCommonNeighbours(countries, 3);
  expect(has3Neighbours).toBe(false);
});
