function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
//   ex1
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const ulDays = document.getElementById("days");
for (let index = 0; index < dezDaysList.length; index += 1) {
  const criaLi = document.createElement("li");
  criaLi.innerText = dezDaysList[index];
  criaLi.classList.add("day");
  if (
    dezDaysList[index] === 24 ||
    dezDaysList[index] === 25 ||
    dezDaysList[index] === 31
  ) {
    criaLi.classList.add("holiday");
  }
  if (
    dezDaysList[index] === 4 ||
    dezDaysList[index] === 11 ||
    dezDaysList[index] === 18 ||
    dezDaysList[index] === 25
  ) {
    criaLi.classList.add("friday");
  }
  ulDays.appendChild(criaLi);
}
// ex2
const botao = document.getElementsByClassName("buttons-container")[0];
const criaBotao = document.createElement("button");
criaBotao.innerText = "Feriados";
criaBotao.classList.add("bnt-holiday");
botao.appendChild(criaBotao);
