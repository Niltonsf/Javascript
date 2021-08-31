// Arrow function não possui argumentos, a não ser que passamos eles dessa forma
const arr = (...args) => {
    console.log(args);
};

arr('+', 0, 1, 2, 3, 4, 5, 6);

// Rest operator
function conta(operator, acumulador, ...numeros) {
    console.log(operator, acumulador, numeros);
}

//conta('+', 0, 1, 2, 3, 4, 5, 6);

// Argumentos que sustenta todos os argumentos enviados
// Unico jeito de pular o valor de algum numero é passando undefined pra ele
function funcao(a, b = 2, c = 3) {
    console.log(a + b + c);
}
funcao(2, undefined, 20);

/*
// Arguments que sustenta todos os argumentos enviados
function funcao() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 6, 7);

function funcao() {
    console.log(arguments[0]);
}
funcao('Valor');
*/