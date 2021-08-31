/*

******************************************************************************

// Moldes para criar clientes, quando temos que criar um usuario ou um cliente varias vezes
// usamos moldes.
// Factory Function / Constructor Function

// cria um objeto vazio, atrela o this a este objeto e retorna o objeto
function ConstructorPessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new ConstructorPessoa('Nilton', 'Sobrenome');
console.log(p2);

function factoryCriaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `Seu nome é ${this.nome} e seu sobrenome é ${this.sobrenome}`;
        }
    };
}

const p1 = factoryCriaPessoa('Nilton', 'Schumacher');
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto());

******************************************************************************

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 20;
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());
for (let chave in pessoa1) {
    console.log(chave);
}

******************************************************************************

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const chave = 'nome';
console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa[chave]);
console.log(pessoa.sobrenome);
*/