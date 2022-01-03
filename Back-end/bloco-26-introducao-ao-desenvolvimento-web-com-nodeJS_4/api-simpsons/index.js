const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./utils.js');
const rescue = require("express-rescue");
const authMiddleware = require('./authMiddleware');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(authMiddleware);

app.get('/', (req, res) => {
  res.status(200).send('<h1>Você esta na rota /</h1>');
})

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await utils.getSimpsons();

  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await utils.getSimpsons();

  const simpson = simpsons.find((simpson) => simpson.id === id);

  if (!simpson) return res.status(404).json({ message: 'Simpson not found' });

  res.status(200).json(simpson);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await utils.getSimpsons();

  if (simpsons.map(({ id }) => id).includes(id))
    return res.status(409).json({ message: 'id already exists' });

  simpsons.push({ id, name });

  await utils.setSimpsons(simpsons);

  res.status(204).end();
}));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
