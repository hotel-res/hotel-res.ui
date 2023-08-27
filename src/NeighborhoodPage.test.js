import { userEvent, render, screen } from '@testing-library/react';
import NeighborhoodPage from './NeighborhoodPage';

test('renders Neighborhood Page', () => {
  render(<NeighborhoodPage />);
  const titleElement = screen.getByText(/Neighborhood Page/i);
  expect(titleElement).toBeInTheDocument();
});
