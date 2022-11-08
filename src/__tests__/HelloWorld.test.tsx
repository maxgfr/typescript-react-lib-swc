import { render } from '@testing-library/react';
import { HelloWorld } from '../HelloWorld';

describe('<HelloWorld />', () => {
  it('should render', () => {
    expect(render(<HelloWorld name="world" />)).toBeTruthy();
  });

  it('should render good word', () => {
    const { getByTestId } = render(<HelloWorld name="monde" />);
    expect(getByTestId('h1')).toHaveTextContent('Hello monde');
  });
});
