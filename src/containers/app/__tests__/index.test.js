import React from 'react';
import { render } from '@testing-library/react';
import { getByTestId } from '@testing-library/dom';
import App from '../index';

const renderComponent = () => render(<App />);

test('renders the dashboard', () => {
  const { container } = renderComponent();
  expect(container).not.toBeNull();
  const dashboard = getByTestId(container, 'dashboard');
  expect(dashboard).not.toBeNull();
});
