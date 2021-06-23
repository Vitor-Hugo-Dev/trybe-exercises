const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// exercício 1
const ex1 = sum(4, 5);
assert.deepStrictEqual(ex1, 9, `ex1 é igual a ${ex1}`);

const ex2 = sum(0, 0);
assert.deepStrictEqual(ex2, 0, `ex2 é igual a ${ex2}`)

// const ex3 = sum(4, '5');
// assert.deepStrictEqual(ex3, 9);

assert.throws(() => {sum(4, '5')}, /^Error: parameters must be numbers$/)