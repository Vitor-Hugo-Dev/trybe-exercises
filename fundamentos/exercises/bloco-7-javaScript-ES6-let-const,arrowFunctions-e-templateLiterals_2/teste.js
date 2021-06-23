
const object = {
    nome: "vitor",
    sobrenome: "silva"
};

// let newKey = "novaChave";
// const novaChave = "valor";
// object[newKey] = novaChave;
// object['testeChave'] = 'nova Chave2';
// console.log(object);
const funcao = (par1, par2, par3) => {
    let newKey = par2;
    let value = par3;
    par1[newKey] = value;
    console.log(object);
}
funcao(object, 'age', 24);