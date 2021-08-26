function criaMultiplicacao(mult) {
    return function(n) {
        return n * mult;
    };
}

const duplica = criaMultiplicacao(2);
console.log(duplica(3));

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

/*
function criaUsuario(nome, sobrenome, id) {
    return {
        nome,
        sobrenome,
        id
    };
}

const user = criaUsuario('Nilton', 'Schumacher', 12728);
console.log(user);
*/