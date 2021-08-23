// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';
import userEvent from '@testing-library/user-event';
it('alterando o valor dos campos e testando o valor guardado', () => {
  const { getByTestId } = render(<App />);
  const inputNome = getByTestId('input-nome');
  expect(inputNome).toHaveValue('');
  fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
  expect(inputNome).toHaveValue('Estudante da Trybe');

  const inputEmail = getByTestId('input-email');
  expect(inputEmail).toHaveValue('');
  // fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
  userEvent.type(inputEmail, 'estudante@trybe.com'); // forma mais alto nivel de simular um evento
  expect(inputEmail).toHaveValue('estudante@trybe.com');
});