import { userEvent, render, screen } from '@testing-library/react';
import FaqPage from './FaqPage';

test('renders FAQ Page', () => {
  render(<FaqPage />);
  const faqTitleElement = screen.getByText(/FAQ Page/i);
  expect(faqTitleElement).toBeInTheDocument();
});
