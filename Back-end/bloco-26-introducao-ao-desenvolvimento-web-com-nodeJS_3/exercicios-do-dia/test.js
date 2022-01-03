const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const myFunction = require('./index.js');

describe('testa a função', () => {
  describe("verifica se ao passar um numero negativo o resultado é 'negativo'.", () => {
    const NEGATIVE = -1;

    it('verifica se o retorno é uma string', () => {
      expect(myFunction(NEGATIVE)).to.be.a('string');
    })

    it('testa a chamada da função com um numero negativo', () => {
      expect(myFunction(NEGATIVE)).to.be.equal('negativo');
    });
  });

  describe("verifica se ao passar um numero positivo o resultado é 'positivo'.", () => {
    const POSITIVE = 1;

    it('verifica se o retorno é uma string', () => {
      expect(myFunction(POSITIVE)).to.be.a('string');
    })

    it('testa a chamada da função com um numero positivo', () => {
      expect(myFunction(POSITIVE)).to.equal('positivo');
    });
  });

  describe("verifica se ao passar 0 o resultado é 'neutro'.", () => {
    const NEUTRO = 0;

    it('verifica se o retorno é uma string', () => {
      expect(myFunction(NEUTRO)).to.be.a('string');
    })

    it('testa a chamada da função com 0', () => {
      expect(myFunction(NEUTRO)).to.equal('neutro');
    });
  });

  describe('verifica o resultado ao passar algo diferente de um number', () => {
    console.log(myFunction('teste'));
    it('verifica se é diferende de number', () => {
      expect(myFunction('asa')).to.be.a('o valor deve ser um numero');
    })
  })
});
