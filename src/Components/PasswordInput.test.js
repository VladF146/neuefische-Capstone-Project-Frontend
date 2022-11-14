import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import PasswordInput from './PasswordInput';

const mockedSetPassword = jest.fn();

describe('PasswordInput', () => {
  test('renders correctly', () => {
    render(<PasswordInput password="" setPassword={mockedSetPassword} />);
    const hiddenPasswordInput = screen.queryByLabelText(/password:/i);
    expect(hiddenPasswordInput).toBeInTheDocument();
    expect(hiddenPasswordInput).toHaveTextContent('');

    const visiblePasswordInput = screen.queryByRole('textbox', {
      name: /password:/i,
    });
    expect(visiblePasswordInput).not.toBeInTheDocument();

    const button = screen.getByRole('button');
    const showIcon = screen.getByTitle('Show password');

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

  test('should change icon and type when button clicked', async () => {
    const user = userEvent.setup();
    render(<PasswordInput password="" setPassword={mockedSetPassword} />);
    const togglePasswordVisibilityButton = screen.getByRole('button');

    const passwordInput = screen.queryByLabelText(/password:/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput.type).toBe('password');

    let hideIcon = screen.queryByTestId('hide');
    expect(hideIcon).not.toBeInTheDocument();

    let showIcon = screen.queryByTestId('show');
    expect(showIcon).toBeInTheDocument();

    await user.click(togglePasswordVisibilityButton);

    expect(passwordInput.type).toBe('text');
    hideIcon = screen.queryByTestId('hide');
    expect(hideIcon).toBeInTheDocument();
    showIcon = screen.queryByTestId('show');
    expect(showIcon).not.toBeInTheDocument();
  });
});
