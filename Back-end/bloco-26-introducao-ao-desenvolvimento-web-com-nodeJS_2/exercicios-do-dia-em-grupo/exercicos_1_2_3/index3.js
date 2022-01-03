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

const myFunctionAsync = async () => {
try {
  const result = await myFunction(a, b, c);
    console.log(` o valor é: ${result}`)
} catch (err) {
    console.log(err.message);
}
};

myFunctionAsync();