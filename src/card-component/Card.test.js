import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {

  test('renders card heading text', () => {
    render(<Card />);
    const headingTextElement = screen.getByText(/Improve your front-end skills by building projects/i);
    expect(headingTextElement).toBeInTheDocument();
  });
  
  test('renders card sub text', () => {
      render(<Card />);
      const subTextElement = screen.getByText(/Scan the QR code to visit Frontend Mentor and take your coding skills to the next level/i);
      expect(subTextElement).toBeInTheDocument();
  });

});