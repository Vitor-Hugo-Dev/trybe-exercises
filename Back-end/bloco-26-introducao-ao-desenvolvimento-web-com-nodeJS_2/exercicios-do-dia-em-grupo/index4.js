const fs = require('fs').promises;

const creatSimpsonsFamily = async () => {
  const simpsons = await fs
    .readFile('./simpson.json', 'utf-8')
    .then((file) => JSON.parse(file));

    const simpsonsFamily = simpsons.filter((simpson) => simpson.id <= 4);
    // simpsons.filter((simpson) => console.log(simpson.id));
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

creatSimpsonsFamily();