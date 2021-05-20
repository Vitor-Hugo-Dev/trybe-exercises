// ex1

{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    for (let index = 0; index < numbers.length; index += 1) {
        console.log(numbers[index]);
    }
}
// ex2
{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let soma = 0;
    for (let index = 0; index < numbers.length; index += 1) {
       soma = soma + numbers[index];
      
    }
    console.log(soma);
}
// ex3
{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let soma = 0;
    for (let index = 0; index < numbers.length; index += 1) {
       soma = soma + numbers[index];
      
    }
    console.log(soma / (numbers.length +=1));
}