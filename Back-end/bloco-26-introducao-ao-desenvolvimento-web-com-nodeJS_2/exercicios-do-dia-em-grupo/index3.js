const fs = require('fs').promises;

const filterSimpson = async () => {
  const simpsons = await fs
    .readFile('./simpson.json', 'utf-8')
    .then((file) => JSON.parse(file));

    const newFileSimpsons = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
    // console.log(newFileSimpsons);
    await fs.writeFile('./simpson.json', JSON.stringify(newFileSimpsons));
}

filterSimpson();