const acorda = () => 'Acordando!!';
// console.log(wakeup());
const goToCafe = () => 'Bora tomar café!!';

const goToDormir = () => 'Partiu dormir!!';

const doingThings = (func) => {
  console.log(func());
};

doingThings(acorda);
doingThings(goToCafe);
doingThings(goToDormir);
