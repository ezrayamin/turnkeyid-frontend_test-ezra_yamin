import React from 'react'
import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const getPromise = () => {
//   let deferred
//   const promise = new Promise((resolve, reject) => {
//     deferred = { resolve, reject }
//   });
//   return { deferred, promise }
// }
