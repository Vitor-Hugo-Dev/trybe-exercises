// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'laranja', 'melão', 'banana', 'abacaxi', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granola', 'mais leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
 return [...fruit, ...additional ];
};

console.log(fruitSalad(specialFruit, additionalItens));