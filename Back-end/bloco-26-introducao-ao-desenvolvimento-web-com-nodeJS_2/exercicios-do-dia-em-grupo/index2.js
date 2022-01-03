const fs = require('fs').promises;

const getSimpsonById = async (id) => {
  const simpsons = await fs
    .readFile('./simpson.json', 'utf8')
    .then((file) => JSON.parse(file));

  const simpsonEscolhido = simpsons.find((simpson) => Number(simpson.id) === id);
  
  console.log(simpsonEscolhido);

  if (!simpsonEscolhido) {
    throw new Error('id não encontrado!');
  }
  return simpsonEscolhido;
};

getSimpsonById(3);