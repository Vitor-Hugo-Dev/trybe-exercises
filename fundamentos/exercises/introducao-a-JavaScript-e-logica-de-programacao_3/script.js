

// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
{
    // 1 dado n = x > 1
    let n = 5;
    let simb = "*";
    let linha = "";

    // 2 imprimir na tela um quadrado de *

    // 3 tamanho do quadrado = n
    for (let index = 0; index < n; index += 1) {
        linha += simb;
    }
    // 4 largura do quadrado igual a n
    for (let index = 0; index < n; index += 1) {
        console.log(linha);
    }
}
// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
{
    // 1 dado n = > 1
    let n = 10;
    let simb = "*";
    let linha = "";
    for (index = 0; index < n; index += 1) {
        // 2 imprimir na tela um triangulo de *
        linha += simb;
        console.log(linha);
    }
    // 3 a base do triangulo deve ser = n
}
//3- Agora inverta o lado do triângulo.
{
    let n = 5;
    let simb = "*";
    let linha = [];
    let espaco = " ";
    for (let index = 0; index < n; index += 1){
        linha += espaco;
    }
    for (let index = linha.length; index <= linha.length; index -= 1){
        linha -= " ";
        linha.push += simb;
    }


}