const estadosBR = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraíma",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};
const pegaSelected = document.getElementById("state-of-people");
for (let index in estadosBR) {
  const criaOption = document.createElement("option");
  criaOption.innerText = estadosBR[index];
  pegaSelected.appendChild(criaOption);
}

function interromper(event) {
  console.log("teste");
  event.proventDefault();
}

const botao= document.getElementById("enviar");

botao.addEventListener("submit", interromper);

// if(document.getElementById('date').value === ""){
//     alert("você precisa inserir uma data valida!")
// }

let divInfos = document.createElement("div");


// ex4
 const limpar = document.getElementById("limpar");

 const pegaDivs = document.getElementsByTagName("div");

 for (let index = 0; index < pegaDivs.length; index += 1 ){
   let filhoDiv = pegaDivs[index];
   for ( let index2 = 0; index2 < filhoDiv.length; index += 1 ){

   }
 }