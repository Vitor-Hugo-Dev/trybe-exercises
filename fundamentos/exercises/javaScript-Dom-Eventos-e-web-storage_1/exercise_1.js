let titulo = document.querySelector("#page-title");
titulo.style.color = "blue";
titulo.innerText = "FAZENDO RECAPTULAÇÃO EXERCÍCIOS";
titulo.style.textAlign = "center";
titulo.style.fontStyle = "italic";
document.body.style.textAlign = "center";

let secondParagraph = document.querySelector("#second-paragraph");
secondParagraph.innerText = "ENTENDENDO COMO FUNCIONA OS SELETORES";
secondParagraph.style.color = "orange";

let subtitulo = document.querySelector("#subtitle");
subtitulo.style.fontSize = "50px";
subtitulo.style.color = "blue";
subtitulo.innerText += " parrudo";

let classeIgual = document.querySelectorAll(".igual");
console.log(classeIgual[0]);
console.log(classeIgual[1]);
document.getElementsByClassName("igual")[0].style.fontSize = "50px";
document.getElementsByClassName("igual")[0].style.color = "blue";

let tagName = document.querySelectorAll("h4")[0];
tagName.style.fontSize = "50px";
tagName.style.color = "blue";
tagName.innerText = " COLORIDO COM SUCESSO";
