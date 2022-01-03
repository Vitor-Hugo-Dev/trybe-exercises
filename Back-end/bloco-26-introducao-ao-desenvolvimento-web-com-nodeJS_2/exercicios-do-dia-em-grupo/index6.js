const fs = require('fs').promises;

const changeNelson = () => {
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((file) => JSON.parse(file))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((newSimpsons) => newSimpsons.concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((simpsonsWhitMaggie) => fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWhitMaggie)));
};

changeNelson();