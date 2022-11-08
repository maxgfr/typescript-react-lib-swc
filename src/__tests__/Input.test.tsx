import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../Input';

describe('<Input />', () => {
  it('should render', () => {
    expect(render(<Input />)).toBeTruthy();
  });

  test('Input writing', () => {
    render(<Input />);
    const input = screen.getByLabelText(/enter a value/i);
    fireEvent.change(input, { target: { value: 'résultat' } });
    expect(input).toHaveValue('résultat');
    const result = screen.getByTestId('input-result');
    expect(result).toHaveTextContent('Input result : résultat!');
  });
});
