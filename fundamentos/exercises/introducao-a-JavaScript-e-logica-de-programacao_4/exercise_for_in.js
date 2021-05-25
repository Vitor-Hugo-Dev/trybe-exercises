// ex 1
let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};
for (let index in names) {
  console.log("Olá " + names[index]);
}

// ex2
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for ( let indexCar in car){
      console.log(indexCar);
  }