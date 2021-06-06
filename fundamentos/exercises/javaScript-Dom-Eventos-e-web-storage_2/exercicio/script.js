//ex1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
//ex2- Adicione a tag div com a classe main-content como filho da tag body ;
//ex3- Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
//ex4- Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
//ex5- Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
//ex6- Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
//ex7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
//ex8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
//ex9- Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

// ex1
const criaH1 = document.createElement("h1");
criaH1.innerText = "Exercício 5.2 - JavaScript DOM";
const ex1 = document.body.appendChild(criaH1);

// ex2
const criaDiv = document.createElement("div");
criaDiv.classList.add("main-content");
const ex2 = document.body.appendChild(criaDiv);

// ex3
const criaDiv2 = document.createElement("div");
criaDiv2.classList.add("center-content");
const ex3 = ex2.appendChild(criaDiv2);

// ex4
const criaP = document.createElement("p");
criaP.innerText = "Refazendo exercício e fixando o aprendizado.";
const ex4 = ex3.appendChild(criaP);

// ex5
const criaDiv3 = document.createElement("div");
criaDiv3.classList.add("left-content");
const ex5 = ex2.appendChild(criaDiv3);

// ex6
const criaDiv4 = document.createElement("div");
criaDiv4.classList.add("right-content");
const ex6 = ex2.appendChild(criaDiv4);

// ex7
const criaImg = document.createElement("img");
criaImg.src = "461-200x200.jpg";
criaImg.classList.add("small-image");
const ex7 = ex5.appendChild(criaImg);

// ex8
const criaUl = document.createElement("ul");
for (let index = 1; index <= 10; index += 1) {
  let criaLi = document.createElement("li");
  criaLi.innerText = index;
  criaUl.appendChild(criaLi);
}
const ex8 = ex6.appendChild(criaUl);

// ex9
for (let index = 1; index <= 3; index += 1) {
  const criaH3 = document.createElement("h3");
  const ex9 = ex2.appendChild(criaH3);
}
