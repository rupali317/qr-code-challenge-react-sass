import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {

    test('renders footer text', () => {
        render(<Footer />);
        const ChallengeByText = screen.getByText(/Challenge by/);
        const CodedByText = screen.getByText(/Coded by/);
        expect(ChallengeByText).toBeInTheDocument();
        expect(CodedByText).toBeInTheDocument();
    });
    
    test('renders footer link', () => {
        render(<Footer />);
        const frontEndMentorLink = screen.getByRole('link', {
            name: /Frontend Mentor/
        });
        const authorNameLink = screen.getByRole('link', {
            name: /Rupali Roy Choudhury/
        });
        expect(frontEndMentorLink).toBeInTheDocument();
        expect(authorNameLink).toBeInTheDocument();
    });

});