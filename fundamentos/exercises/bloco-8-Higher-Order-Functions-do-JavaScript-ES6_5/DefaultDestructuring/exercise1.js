const person = {
    name: 'João',
    lastName: 'Jr',
    age: 34,
    nationality: 'brasilian'
  };
  
  const { nationality = "*-*"} = person;
  console.log(nationality);