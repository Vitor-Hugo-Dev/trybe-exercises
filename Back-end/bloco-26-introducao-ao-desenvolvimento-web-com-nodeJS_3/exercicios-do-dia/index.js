const verifyNumberType = (number) => {
  if (number > 0) {
    return 'positivo';
  } else if (number < 0) {
    return 'negativo';
  } else if (number === 0) {
    return 'neutro';
  } else if (number !== Number) {
    return 'o valor deve ser um numero';
  }
};
module.exports = verifyNumberType;
