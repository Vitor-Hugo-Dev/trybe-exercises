// ex1
let a = 24;
let b = 18;

let soma = a + b;

let subtracao = a - b;

let multiplicacao = a * b;

let divisao = a / b;

let modulo = a % b;

// ex2

let c = 10;
let d = 15;

if (c > d) {
    console.log(c);
}
else {
    console.log(d);
}

// ex3

let e = 20;
let f = 25;
let g = 30;

if (e > f && e > g) {
    console.log(e)
}
else if (f > e && f > g) {
    console.log(f)
}
else {
    console.log(g)
}

// ex4

let test4 = 5;

if (test4 > 0) {
    console.log("positive");
}
else if (test4 < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

// ex5

let h = 80;
let i = 50;
let j = 50;

if (h + i + j === 180) {
    console.log(true);
}
else {
    console.log(false);
}
// ex6

let k = "Cavalo";
let kLow = k.toLowerCase();

switch (kLow) {
    case "rei":
        console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
        break;

    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças");
        break;

    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
        break;

    case "cavalo":
        console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
        break;

    case "torre":
        console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
        break;

    case "peão":
        console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
        break;

    default:
        console.log("Essa peça n existe!");
}

// ex7

let nota = 40;

if (nota < 0 || nota > 100) {
    console.log("ERRO")
}
else if (nota >= 90) {
    console.log("A");
}
else if (nota >= 80) {
    console.log("B");
}
else if (nota >= 70) {
    console.log("C");
}
else if (nota >= 60) {
    console.log("D");
}
else if (nota >= 50) {
    console.log("E")
}
else {
    console.log("F");
}
