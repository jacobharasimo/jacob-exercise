import React from 'react';
import { render } from '@testing-library/react';
import { getByTestId, fireEvent } from '@testing-library/dom';

import Orders from '..';

const renderComponent = () => render(<Orders />);

describe('<Title>', () => {
  it('rendered', () => {
    const { container } = renderComponent();
    expect(container).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('has a table', () => {
    const { container } = renderComponent();
    const table = getByTestId(container, 'table');
    expect(table).not.toBeNull();
  });

  test('has a button', async () => {
    const { container } = renderComponent();
    const button = getByTestId(container, 'action-button');
    expect(button).not.toBeNull();
    // this is not expecting anything as its just to demonstrate how you can await for async events
    // inside a test
    await fireEvent.click(button);
  });
});
