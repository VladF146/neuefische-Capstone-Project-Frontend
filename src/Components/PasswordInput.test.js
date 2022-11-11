import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordInput from './PasswordInput';

const mockedSetPassword = jest.fn();

describe('PasswordInput', () => {
  test('renders correctly', () => {
    render(<PasswordInput password="" setPassword={mockedSetPassword} />);
    const input = screen.getByPlaceholderText('e.g., ••••••••');
    const button = screen.getByRole('button');
    const showIcon = screen.getByTitle('Show password');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(showIcon).toBeInTheDocument();
  });

  test('should change value based on password prop', () => {
    render(
      <PasswordInput password="ABCabc123!" setPassword={mockedSetPassword} />,
    );
    const inputElement = screen.getByPlaceholderText('e.g., ••••••••');
    expect(inputElement.value).toBe('ABCabc123!');
    expect(inputElement).toBeInTheDocument();
  });

  test('should change icon when clicked', () => {
    render(<PasswordInput password="" setPassword={mockedSetPassword} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const hideIcon = screen.getByTitle('Hide password');
    expect(hideIcon).toBeInTheDocument();
  });
});
