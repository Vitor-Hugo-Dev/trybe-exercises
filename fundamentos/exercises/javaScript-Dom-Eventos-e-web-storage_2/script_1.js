// EXERCÍCIOS PARTE I -BUSCANDO ELEMENTOS.
//ex1- Acesse o elemento elementoOndeVoceEsta .
//ex2- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
//ex3- Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
//ex4- Acesse o primeiroFilho a partir de pai .
//ex5- Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
//ex6- Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
//ex7- Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
//ex8- Agora acesse o terceiroFilho a partir de pai .

// ex1-
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
console.log(elementoOndeVoceEsta);
// ex2-
let acessaElementoPai = elementoOndeVoceEsta.parentElement;
console.log(acessaElementoPai);
acessaElementoPai.style.color = "black";
// ex3-
let primeiroFilho = document.getElementById("primeiroFilho");
primeiroFilho.innerText = "Revisão de conteúdo";
console.log(primeiroFilho);
// ex4-
let acessaDePai = document.getElementById("pai");
acessaDePai.children[0];
console.log(acessaDePai.children[0]);
// ex5-
let acessaDeElementoOndeVoceEsta = elementoOndeVoceEsta.previousElementSibling;
console.log(acessaDeElementoOndeVoceEsta);
// ex6-
let acessaAtencao = elementoOndeVoceEsta.nextSibling;
console.log(acessaAtencao);
// ex7-
let acessaTerceiroFilho = elementoOndeVoceEsta.nextElementSibling;
console.log(acessaTerceiroFilho);
// ex8-
let acessaTerceiroFilhoDePai =
  acessaDePai.lastElementChild.previousElementSibling;
console.log(acessaTerceiroFilhoDePai);

// EXERCÍCIOS PARTE II - CRIANDO ELEMENTOS.

//EX1- Crie um irmão para elementoOndeVoceEsta .
//EX2- Crie um filho para elementoOndeVoceEsta .
//EX3- Crie um filho para primeiroFilhoDoFilho .
//EX4- A partir desse filho criado, acesse terceiroFilho .

// ex1-
let criaIrmao = elementoOndeVoceEsta.parentElement;
let irmao = document.createElement("div");
irmao.innerText = "Novo Irmão.";
criaIrmao.appendChild(irmao);

// ex2-
let criaFilho = elementoOndeVoceEsta;
let filho = document.createElement("h1");
filho.innerText = "VAI FILHÃO!!!!";
criaFilho.appendChild(filho);

// ex3-
let criaFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
let filhoFilhoDoFilho = document.createElement("h2");
filhoFilhoDoFilho.innerText = "VAI FILHÃO DO FILHÃO!!";
criaFilhoDoFilho.appendChild(filhoFilhoDoFilho);

// ex4-
let acessaTerceiroFilhoDeNovo = document.getElementById(
  "primeiroFilhoDoFilho"
).firstChild;
acessaTerceiroFilhoDeNovo.parentElement.parentElement.nextElementSibling;

// EXERCÍCIOS PARTE III - REMOVENDO ELEMENTOS

// ex1- Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
acessaDePai.removeChild(document.getElementById('terceiroFilho'));
acessaDePai.removeChild(document.getElementById('quartoEUltimoFilho'));
acessaDePai.removeChild(acessaDePai.children[2]);
acessaDePai.removeChild(acessaDePai.childNodes[4]);