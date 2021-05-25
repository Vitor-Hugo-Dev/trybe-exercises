// ex1
let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};
//  ex2
console.log(
  "A jogadora " +
    player.name +
    " " +
    player.lastName +
    " tem " +
    player.age +
    " anos de idade"
);
// ex3
player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

// ex4
console.log( "A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por "+ player.bestInTheWorld.length + " vezes")

//  ex5
console.log( "A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " de prata")