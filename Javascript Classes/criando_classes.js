// Classe é igual uma factory functin, so que não precisamos criar prototypes toda vez
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    beber() {
        console.log(`${this.nome} está bebendo`);
    }
}

const p1 = new Pessoa('Nilton', 'Schumacher');
p1.beber();