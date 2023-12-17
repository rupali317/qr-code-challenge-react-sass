import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card heading text', () => {
  render(<Card />);
  const textElement = screen.getByText(/Improve your front-end skills by building projects/i);
  expect(textElement).toBeInTheDocument();
});

test('renders card sub text', () => {
    render(<Card />);
    const textElement = screen.getByText(/Scan the QR code to visit Frontend Mentor and take your coding skills to the next level/i);
    expect(textElement).toBeInTheDocument();
});