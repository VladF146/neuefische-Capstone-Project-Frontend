import { render, screen } from '@testing-library/react';
import Signin from './Signin';

describe('Signin', () => {
  test('renders correctly', () => {
    render(<Signin />);
    const emailInput = screen.getByRole('textbox');
    expect(emailInput).toBeInTheDocument();
  });
});
