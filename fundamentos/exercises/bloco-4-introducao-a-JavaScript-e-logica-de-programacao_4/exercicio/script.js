let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//   ex1- Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log("Bem vinda, " + info.personagem);
//  ex2- Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info["recorrente"] = "sim";
console.log(info);
// ex3- Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
for (let index in info) {
  console.log(index);
}
// ex4- Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let index in info) {
  console.log(info[index]);
}
// ex5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

let text = ""; // var para armazenar o resto que vai ser impresso.

for (let index in (info, info2)) {
  if (info.recorrente === info2.recorrente) {
    text = (info.personagem + " e " + info2.personagem + ". " + info.origem + " e " + info2.origem + ". " + info.nota + " e " + info2.nota + "." + " ambas recorrentes");
  } else {
    text = (info.personagem + "e" + info2.personagem + ". " + info.origem + " e " + info2.origem + ". " + info.nota + " e " + info2.nota + ". " + info.personagem + " recorrente" + ", " + info2.personagem + " não recorrente." );
    break;
  }
}
console.log(text);
