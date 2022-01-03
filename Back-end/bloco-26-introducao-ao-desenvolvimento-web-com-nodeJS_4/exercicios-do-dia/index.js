const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({message: 'PONG!'})
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(404).json({message: 'Name not found!'});

  res.status(200).json({ message: `Hello, ${name}!`});
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) return res.status(404).json({ message: 'Error!'});

  if (age > 17) return res.status(200).json({message: `Hello, ${name}`});
  
  res.status(401).json({message: 'Unauthorized!'});
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  // if (!name || !age) return res.status(404).json({message: 'Error!'});

  res.status(200).json({message: `Seu nome é ${name} e você tem ${age} anos de idade`})
});

app.listen(3001, () => {
  console.log('aplicação rodando na porta 3001');
})