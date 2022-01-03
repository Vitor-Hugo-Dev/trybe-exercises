/* index.js */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// app.get('/validateToken', (req, res) => {
//   const token = req.headers.authorization;
//   if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

//   res.status(200).json({message: 'Valid Token!'});
// });

app.get('/recipes', (req, res) => {
  res.json(recipes);
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const recipeIndex = recipes.findIndex((re) => re.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
})

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((re) => re.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!'});

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
})

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((re) => re.name.includes(name) && re.price < parseInt(maxPrice) && re.price >= parseInt(minPrice));
  
  res.status(200).json(filteredRecipes);

});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((re) => re.id === parseInt(id));

  if (!recipe) return res.status(404).json({message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });

  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const drinkIndex = drinks.findIndex((dr) => dr.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks[drinkIndex] = {...recipeIndex, name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((dr) => dr.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
})

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((dr) => dr.name.includes(name));

  res.status(200).json(filteredDrinks);
});

app.get('/drinks', (req, res) => {
  res.json(drinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((dr) => dr.id === parseInt(id));

  if (!drink) return res.status(404).json({message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });

  res.status(201).json({ message:'Drinks createds successfully!'})
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
