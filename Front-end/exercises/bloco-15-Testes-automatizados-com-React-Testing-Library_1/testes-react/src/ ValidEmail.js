import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
 
  return (
    <div>
      <span>
      {email === '' ? null : <span data-testid="id-infos-valid-user">
      <h2 data-testid="id-email-user" style={{color: verifyEmail(email) ? 'green' : 'red'}}>{`Valor: ${email}`}</h2>
      <h3 style={{color: verifyEmail(email) ? 'green' : 'red'}}>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3>
      </span>}
      </span>
      
    </div>
  );
};

export default ValidEmail; 