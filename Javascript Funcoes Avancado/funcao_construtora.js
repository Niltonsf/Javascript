/*
 Função construtora -> objetos
 Função fábrica -> obejtos
 Construtora -> Pessoa (new) // Primeira letra em maiusculo

*/

function Pessoa(nome, sobrenome) {
    const ID = 123456;

    const metodoInterno = function() {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;


    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    };
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Nilton', 'Schumacher');
p1.metodo();