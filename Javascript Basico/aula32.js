const pessoa3 = {
    nome: 'Nilton',
    sobrenome: 'Schumacher',
    idade: 20,

    fala () {
        console.log(`Olá meu nome é ${this.nome} e minha idade é ${this.idade}`);
    },

    incremetaIdade() {
        this.idade++;
    }
};

function criaPessoa (nome, sobrenome, idade) {
    return {  nome, sobrenome, idade
        /*
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
        */
    };
}

//const pessoa1 = criaPessoa('Nilton', 'Schumacher', 20);
//const pessoa2 = criaPessoa('Geovana', 'Tschannerl', 20);

pessoa3.fala();
pessoa3.incremetaIdade();
pessoa3.fala();
