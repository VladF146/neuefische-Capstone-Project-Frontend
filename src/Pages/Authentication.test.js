import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Authentication from './Authentication';

function AuthenticationWrapper({ children }) {
  const queryClient = new QueryClient();

  return (
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
}

describe('Signin', () => {
  test('renders correctly', () => {
    render(
      <AuthenticationWrapper>
        <Authentication />
      </AuthenticationWrapper>,
    );

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('Signin');

    const emailInput = screen.getByRole('textbox', { name: 'Email:' });
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveTextContent('');

    const hiddenPasswordInput = screen.getByLabelText(/password:/i);
    expect(hiddenPasswordInput).toBeInTheDocument();
    expect(hiddenPasswordInput).toHaveTextContent('');

    const submitButton = screen.getByRole('button', {
      name: /signin/i,
    });
    expect(submitButton).toBeInTheDocument();

    const errorWrapper = screen.queryByTestId('error-wrapper');
    expect(errorWrapper).not.toBeInTheDocument();

    const authPageChangeButton = screen.getByRole('button', {
      name: /signup/i,
    });
    expect(authPageChangeButton).toBeInTheDocument();
  });

  test('changes authentication page state on click', async () => {
    const user = userEvent.setup();
    render(
      <AuthenticationWrapper>
        <Authentication />
      </AuthenticationWrapper>,
    );

    let headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('Signin');

    let authPageChangeButton = screen.getByRole('button', {
      name: /signup/i,
    });

    await user.click(authPageChangeButton);

    headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('Signup');

    authPageChangeButton = screen.getByRole('button', {
      name: /signin/i,
    });

    expect(headingElement).toBeInTheDocument();
  });

  test('renders correct error message', async () => {
    const user = userEvent.setup();
    render(
      <AuthenticationWrapper>
        <Authentication />
      </AuthenticationWrapper>,
    );

    const emailInput = screen.getByRole('textbox', { name: 'Email:' });

    const hiddenPasswordInput = screen.getByLabelText(/password:/i);

    const submitButton = screen.getByRole('button', {
      name: /signin/i,
    });

    // Both email & password fields empty
    await user.click(submitButton);

    let errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Email is required!');

    // Password field empty
    await user.type(emailInput, 'vlad@gmail.com');
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Password is required!');

    // Email field empty
    await user.clear(emailInput);
    await user.type(hiddenPasswordInput, '12345678');
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Email is required!');

    // Not signed up email
    await user.type(emailInput, `${Math.random()}@gmail.com`);
    await user.type(hiddenPasswordInput, '12345678');
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent(
      'No user with such an email exists!',
    );

    // Change authentication page to signup
    const authPageChangeButton = screen.getByRole('button', {
      name: /signup/i,
    });

    await user.click(authPageChangeButton);

    // Email field empty
    await user.clear(emailInput);
    await user.type(hiddenPasswordInput, '12345678');
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Email is required!');

    // Email not valid
    await user.type(emailInput, 'vlad@gmail');
    await user.type(hiddenPasswordInput, '12345678');
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Email is not valid.');

    // Password field empty
    await user.clear(emailInput);
    await user.type(emailInput, 'vlad@gmail.com');
    await user.clear(hiddenPasswordInput);
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Password is required!');

    // Weak password
    await user.type(hiddenPasswordInput, '12345678');
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Password should be at least 8 characters long and contain at least one of each: Lower case letter, upper case letter, symbol.');

    // Already used email
    await user.type(hiddenPasswordInput, 'ABCabc123!');
    await user.click(submitButton);

    errorWrapper = await screen.findByTestId('error-wrapper', {
      timeout: 10000,
    });
    expect(errorWrapper).toHaveTextContent('Email address is already used!');
  });
});
