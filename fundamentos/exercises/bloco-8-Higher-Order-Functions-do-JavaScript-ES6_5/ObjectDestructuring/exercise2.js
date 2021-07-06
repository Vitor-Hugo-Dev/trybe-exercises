// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const correcao = ['gato', 'água', 'arroz'];
const [animal, bebida, comida] = correcao;

console.log(comida, animal, bebida);
