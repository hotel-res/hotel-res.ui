import { render, screen } from '@testing-library/react';
import BookPage from './BookPage';

test('renders Book Page', () => {
  render(<BookPage />);
  const faqTitleElement = screen.getByText(/Books Page/i);
  expect(faqTitleElement).toBeInTheDocument();
});
