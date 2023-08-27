import { userEvent, render, screen } from '@testing-library/react';
import TeamPage from './TeamPage';

test('renders Team Page', () => {
  render(<TeamPage />);
  const titleElement = screen.getByText(/Team Page/i);
  expect(titleElement).toBeInTheDocument();
});
