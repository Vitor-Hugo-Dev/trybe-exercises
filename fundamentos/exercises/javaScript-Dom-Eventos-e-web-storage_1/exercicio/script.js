/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 ex1- Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 ex2- Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 ex3- Crie uma função que mude a cor do quadrado vermelho para branco.
 ex4- Crie uma função que corrija o texto da tag <h1>.
 ex5- Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 ex6- Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
// ex1
let ex1 = (document.getElementsByTagName("p")[0].innerText =
  "Daqui a dois anos quero estar trabalhando em algum projeto filantropo que me ajude a melhorar o mundo.");

//ex2
let ex2 = (document.getElementsByClassName(
  "main-content"
)[0].style.backgroundColor = "rgb(76,164,109)");

// ex3
let ex3 = (document.getElementsByClassName(
  "center-content"
)[0].style.backgroundColor = "white");

// ex4
let ex4 = (document.getElementsByClassName("title")[0].innerText =
  "Exercício 5.1 - JavaScript ");

// ex5
// obs: essa sintaxe após o innerText foi descoberta com base em pesquisa e testes.
let ex5 = (document.getElementsByTagName("p")[0].innerText = ex1.toUpperCase());

// ex6
let ex6 = document.getElementsByTagName("p");
for (let index = 0; index < ex6.length; index += 1) {
       console.log(ex6[index]);
}
