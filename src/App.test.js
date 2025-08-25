import { render, screen } from '@testing-library/react';
import App from './App';

test('HotWheels Items', () => {
  render(<App />);
  const items = screen.getAllByText(/carros/i);
  expect(items).toHaveLength(3);
});

test('renderiza título do projeto', () => {
  render(<App />);
  expect(screen.getByText(/Hotwheels CRUD/i)).toBeInTheDocument();
});