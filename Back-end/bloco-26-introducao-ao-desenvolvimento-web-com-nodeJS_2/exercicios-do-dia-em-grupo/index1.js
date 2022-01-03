// 4.1
const fs = require('fs').promises;

fs.readFile('./simpson.json', 'utf-8')
    .then((json) => { 
      return JSON.parse(json);
    })
    .then((obj) => { 
      return obj.map(({id, name}) => `${id} - ${name}`);
    })
    .then((strings) => {
      strings.forEach((string) => console.log(string))
    });

    