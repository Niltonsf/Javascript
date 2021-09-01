const nome = 'Nilton';
const sobrenome = 'Schumacher';
const idade = 30;
const cpf = '123123';

function soma(x, y) {
    return x + y;
}

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma, Pessoa }