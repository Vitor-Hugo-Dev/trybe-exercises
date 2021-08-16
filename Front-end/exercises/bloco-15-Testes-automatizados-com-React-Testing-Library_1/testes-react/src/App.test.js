    // App.test.js
    import React from 'react';
    import { render, fireEvent } from '@testing-library/react';
    import App from './App';
    
    test('Verificando se existe o campo Email.', () => {
      const { getByLabelText } = render(<App />);
      const inputEmail = getByLabelText('Email');
      expect(inputEmail).toBeInTheDocument();
      expect(inputEmail.type).toBe('email');
      // expect(inputEmail.placeholder).toBe('digite seu email')
    });
    
    // test('Verificando se existe um botão', () => {
    //   const { getByRole } = render(<App />);
    //   const btn = getByRole('button');
    //   expect(btn).toBeInTheDocument();
    // });
    test('Verificando se existe um botão de enviar', () => {
      const { getByTestId } = render(<App />);
      const btn = getByTestId('id-send');
      expect(btn).toBeInTheDocument();
      expect(btn.type).toBe('button');
      expect(btn).toHaveValue('Enviar');
    });

    test('Verificando se existe dois botões', () => {
      const { getAllByRole } = render(<App />);
      const buttons = getAllByRole('button');
      expect(buttons.length).toBe(2);
    });
    
    test('Verificando se o botão e o campo email estão funcionando.', () => {
      const { getByTestId, getByLabelText } = render(<App />);
    
      const EMAIL_USER = 'email@email.com';
      
      const btnSend = getByTestId('id-send');
      const inputEmail = getByLabelText('Email');
      fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
      fireEvent.click(btnSend);
      const textEmail = getByTestId('id-email-user');
      expect(inputEmail).toHaveValue('');
      expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);

      expect(textEmail).toBeInTheDocument();
      expect(textEmail).toHaveTextContent(/Valor:/);
    });