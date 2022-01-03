const myFunction = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number'
    ) {
      reject(new Error('Informe apenas números'));
    }
    const resposta = (a + b) * c;

    if (resposta < 50) {
      reject(new Error('Valor muito baixo'));
    }
    
    resolve(resposta);
  });
};

module.exports = myFunction;
