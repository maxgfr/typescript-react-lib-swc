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
    const input = screen.getByLabelText(/enter a value/i);
    userEvent.type(input, 'résultat');
    console.log(input);
    expect(input).toHaveValue('résultat');
    const result = screen.getByTestId('input-result');
    expect(result).toBe('Input result : résultat!');
  });
});
