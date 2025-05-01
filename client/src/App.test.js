import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the app with the correct title', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/OpenSource Connect/i);
  expect(linkElement).toBeInTheDocument();
});

test('dark mode toggle button works', () => {
  render(
    <Router>
      <App />
    </Router>
  );

  const toggleButton = screen.getByText(/🌙/i);
  expect(toggleButton).toBeInTheDocument();

  fireEvent.click(toggleButton);

  const body = document.body;
  expect(body.classList.contains('dark-mode')).toBe(true);

  fireEvent.click(toggleButton);
  expect(body.classList.contains('dark-mode')).toBe(false);
});
