import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toggle from './Toggle';

const mockedSetToggleState = jest.fn();

describe('Toggle', () => {
  test('renders correctly', () => {
    render(
      <Toggle toggleState={false} setToggleState={mockedSetToggleState} />,
    );
    const previewButton = screen.getByRole('button', { name: 'Preview' });
    const markdownButton = screen.getByRole('button', { name: 'Markdown' });
    expect(previewButton).toBeInTheDocument();
    expect(markdownButton).toBeInTheDocument();
  });

  test('should change styling of buttons based on toggleState prop', () => {
    render(<Toggle toggleState setToggleState={mockedSetToggleState} />);
    const previewButton = screen.getByRole('button', { name: 'Preview' });
    const markdownButton = screen.getByRole('button', { name: 'Markdown' });
    expect(previewButton).toHaveStyle('background-color: transparent');
    expect(markdownButton).toHaveStyle('background-color: #ffffff');
  });
});
