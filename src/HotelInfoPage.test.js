import { userEvent, render, screen } from '@testing-library/react';
import HotelInfoPage from './HotelInfoPage';

test('renders Hotel Info Page', () => {
  render(<HotelInfoPage />);
  const titleElement = screen.getByText(/Hotel Info/i);
  expect(titleElement).toBeInTheDocument();
});
