const newPeople = (nome) => {
  const people = {};
  let stringEmail = nome;
  for (let index = 0; index < stringEmail.length; index += 1) {
    stringEmail = nome.replace(' ', '_');
  }
  people.nomeCompleto = nome;
  people.email = `${stringEmail}@trybe.com`;
  return people;
};
// console.log(newPeople('Vitor Hugo'));

const newEmployees = (call) => {
  const employees = {
    id1: call('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: call('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: call('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};
console.log(newEmployees(newPeople));
