import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ValidEmail from './ ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se quando nenhum email foi salvo, não aparece nenhuma mensagem na tela', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={EMAIL_USER}/>);
  const isNotRender = screen.queryByText('Email Valido' || 'Email Inválido' || /Valor:/);
  expect(isNotRender).not.toBeInTheDocument();
})

test('Testa se a cor do texto é verde quando o email é válido',() =>{
  const VALID_EMAIL_USER = 'email@email.com';
  const{ getByTestId } = render(<ValidEmail email={VALID_EMAIL_USER} />)
  const emailTrue = getByTestId('id-email-user');
  expect(emailTrue).toHaveStyle({color: 'green'});
})

test('Testa se a cor do texto é vermelha quando o email é invalido',() =>{
  const INVALID_EMAIL_USER = 'emailerrado';
  const{ getByTestId } = render(<ValidEmail email={INVALID_EMAIL_USER} />)
  const emailTrue = getByTestId('id-email-user');
  expect(emailTrue).toHaveStyle({color: 'red'});
})