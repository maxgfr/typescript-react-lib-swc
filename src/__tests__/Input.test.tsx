import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

describe('<Input />', () => {
  it('should render', () => {
    expect(render(<Input />)).toBeTruthy();
  });

  test('Input writing', () => {
    render(<Input />);

    userEvent.type(screen.getByTestId('input'), 'résultat');
    expect(screen.getAllByTestId('input-result')).toBe(
      'Input result : résultat!',
    );
  });
});
