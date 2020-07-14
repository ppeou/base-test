import React from 'react';
import { render as tlrRender } from '@testing-library/react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './index';
import {initialState as reducerInitialState, reducer} from '../../store';

const render = (ui, {
  initialState= reducerInitialState,
  store = createStore(reducer, initialState),
  ...renderOptions
} = {}) => {
  const wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return tlrRender(ui, { wrapper, ...renderOptions });
};

test('should render counter', () => {
  const { getByText } = render(<Counter />);
  const labelElement = getByText(/Counter/i);
  expect(labelElement).toBeInTheDocument();
});
