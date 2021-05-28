// ex1-Acesse o elemento elementoOndeVoceEsta .
let ondeVcEsta = document.querySelector("#elementoOndeVoceEsta");

// ex2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele
let primeiroFDoF = (document.querySelector(
  "#elementoOndeVoceEsta"
).parentNode.style.color = "red");

// ex3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroF = (document.querySelector("#primeiroFilhoDoFilho").innerText =
  "exercicio do conteudo");

// ex4-Acesse o primeiroFilho a partir de pai .
let primeiroFPai = document.querySelector("#pai").firstChild;

// ex5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
let primeiroFOndeVcEsta = document.querySelector(
  "#elementoOndeVoceEsta"
).previousElementSibling;

// ex6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let textAtencao = document.querySelector("#elementoOndeVoceEsta").nextSibling;

// ex7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = document.querySelector(
  "#elementoOndeVoceEsta"
).nextElementSibling;

// ex8- Agora acesse o terceiroFilho a partir de pai .
let terceiroFilhoPai = document.querySelector("#pai").childNodes[5];

// ex2.1- Crie um irmão para elementoOndeVoceEsta .
let elementoOVE = document.querySelector("#elementoOndeVoceEsta").parentNode;
let elementNewBrother = document.createElement("div");
elementNewBrother.innerText = "assunto complicado da P#$%% !!!";
elementoOVE.appendChild(elementNewBrother);

// ex2.2- Crie um filho para elementoOndeVoceEsta
let elementoOVE2 = document.querySelector("#elementoOndeVoceEsta");
let elementChild = document.createElement('div');
elementChild.innerText = " assunto complicado da P#$%%2 !!!";
elementoOVE2.appendChild(elementChild);

// ex2.3- Crie um filho para `primeiroFilhoDoFilho
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoPrimeiroFilhoDoFilho = document.createElement('div');
filhoPrimeiroFilhoDoFilho.innerText = " assunto complicado da P#$%%3 !!!" + " AGORA MAIS DIFÍCIL";
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

// ex2.4- A partir desse filho criado, acesse `terceiroFilho`.
let terceiroFilho2 = filhoPrimeiroFilhoDoFilho.parentNode.parentNode.nextElementSibling;
console.log(terceiroFilho2);

// ex3.1- Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let removeItens = document.getElementById('pai');
