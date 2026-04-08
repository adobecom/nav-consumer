import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('./Footer', () => ({
  default: function MockFooter() {
    return (
      <main>
        <img src="#" alt="banner" />
      </main>
    );
  },
}));

import App from './App';

test('renders banner image', () => {
  render(<App />);
  expect(screen.getByRole('img', { name: /banner/i })).toBeInTheDocument();
});
