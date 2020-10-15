import React from 'react';
import { render } from '@testing-library/react';
import { Title } from '..';

const TITLE_TEXT = 'This has a title';
const renderComponent = () => render(<Title>{TITLE_TEXT}</Title>);

describe('<Title>', () => {
  it('rendered', () => {
    const { container } = renderComponent();
    expect(container).not.toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('contained the child', () => {
    const { container } = renderComponent();
    expect(container).toHaveTextContent(TITLE_TEXT);
  });
});
