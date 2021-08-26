// IIFE -> Immediatly invoked function expression
(function(idade, peso, altura) {
    const sobrenome = 'Schumacher';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Nilton'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 69.5, 1.70);