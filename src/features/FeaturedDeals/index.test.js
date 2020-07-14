import React from 'react';
import { render } from '@testing-library/react';
import FeaturedDeals from './index';

test('should render feature deal', () => {
  const { getByText } = render(<FeaturedDeals />);
  const labelElement = getByText(/Featured Deals/i);
  expect(labelElement).toBeInTheDocument();
});
