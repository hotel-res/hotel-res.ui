import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const homePageTitleElement = screen.getByText(/Available Rooms/i);
  expect(homePageTitleElement).toBeInTheDocument();
});
