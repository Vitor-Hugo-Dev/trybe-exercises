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
  let n = 5;
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
  let symbol = "*";
  let inputLine = "";
  let inputPosition = n;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
      if (columnIndex < inputPosition) {
        inputLine += " ";
      } else {
        inputLine += symbol;
      }
    }
    console.log(inputLine);
    inputLine = "";
    inputPosition -= 1;
  }
}
//4- Depois, faça uma pirâmide com n asteriscos de base: 
{
    let n = 55;
    let symbol = "*";
    let inputLine = "";
    
    let midOfPyr = (n + 1) / 2;
    let leftOfPyr = midOfPyr;
    let rightOfPyr = midOfPyr;
    
    for (let lineIndex = 0; lineIndex <= midOfPyr; lineIndex += 1) {
      for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
        if (columnIndex > leftOfPyr && columnIndex < rightOfPyr) {
          inputLine += symbol;
        } else {
          inputLine += " ";
        }
      }
      console.log(inputLine);
      inputLine = "";
      rightOfPyr += 1;
      leftOfPyr -= 1;
    }
    
}