import { render, screen } from '@testing-library/react';
import App from './App';

test('render the Adtriba Challenge text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Adtriba Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
