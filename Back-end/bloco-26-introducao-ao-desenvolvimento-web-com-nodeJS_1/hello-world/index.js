const readLine = require('readline-sync');




const name = readLine.question("What is your name? ");
const age = readLine.questionInt("How old are you? ");

console.log(`Hello ${name}! You are ${age} years old.`);