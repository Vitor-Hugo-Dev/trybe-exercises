const fs = require('fs').promises;

const addNelsonToFamily = async () => {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((file) => JSON.parse(file));

    simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

addNelsonToFamily();