import { userEvent, render, screen } from '@testing-library/react';
import RoomsPage from './RoomsPage';

test('renders Rooms Page', () => {
  render(<RoomsPage />);
  const titleElement = screen.getByText(/Available Rooms/i);
  expect(titleElement).toBeInTheDocument();
});
