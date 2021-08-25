const pessoa = {
    nome: 'Nilton',
    sobrenome: 'Schumacher',
    idade: 20,
    endereco: {
        rua: 'Camp Comprido',
        numero: 1000
    }
}

const { endereco: enderec } = pessoa;
const { nome, sobrenome } = pessoa;
const { endereco: { rua, numero } } = pessoa;

console.log(enderec);
console.log(rua, numero)