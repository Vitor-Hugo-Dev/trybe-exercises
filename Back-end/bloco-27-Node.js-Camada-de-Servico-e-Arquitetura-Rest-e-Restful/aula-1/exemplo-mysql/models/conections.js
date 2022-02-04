const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'dino',
  password: 'Vitor1997*',
  host: 'localhost',
  database: 'model_example',
});

module.exports = connection;