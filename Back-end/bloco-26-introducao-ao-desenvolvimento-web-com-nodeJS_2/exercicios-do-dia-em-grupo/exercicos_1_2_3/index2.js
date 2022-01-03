const myFunction = require('./index1.js');

let a= 0;
let b= 0;
let c= 0;

const ramdonNumber = () => {
    a = Math.floor(Math.random() * 100 + 1);
    b = Math.floor(Math.random() * 100 + 1);
    c = Math.floor(Math.random() * 100 + 1);
}
ramdonNumber();
console.log(a, b, c);

myFunction(a, b, c)
  .then((result) => console.log(` o valor é: ${result}`))
  .catch((error) => console.log(`${error}`));