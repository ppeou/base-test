import React from 'react';
import { render } from '@testing-library/react';
import NumericInput from './index';

test('should render numeric-input', () => {
  const { getByText } = render(<NumericInput />);
  const labelElement = getByText(/Enter Number:/i);
  expect(labelElement).toBeInTheDocument();
});
