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
    console.log(soma / (numbers.length += 1));
}
// ex4
{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let soma = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        soma = soma + numbers[index];

    }

    let media = soma / (numbers.length += 1);
    if (media > 20) {
        console.log("valor maior que 20");
    }
    else { console.log("valor menor ou igual a 20"); }
}
// ex5
{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let numMaior = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        // numMaior = numbers[index];
        if (numbers[index] > numMaior) {
            numMaior = numbers[index]
        }
    }
    console.log(numMaior);
}
// ex6
{
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let numImp = 0;
    for (let index = 0; index < numbers.length; index += 1) {
        if ((numbers[index] % 2) !== 0) {
            numImp += 1;
        }
    }
    if (numImp === 0) {
        console.log("nenhum valor ímpar encontrado");
    }
    else {
        console.log(numImp);
    }

}
// ex7
