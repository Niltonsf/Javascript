// Filter -> Sempre retorna um array com a mesma quantidade de elemetos ou menos
// Filter

// Exemplo 1
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

 Podemos tirar o valor, indice, array se não estiver sendo usado
function callbackFilter(valor, indice, array) {
    return valor > 10;
}

const numFiltered = numeros.filter(callbackFilter);

// Geralmente usamos assim

const numFiltered = numeros.filter(valor => valor > 10);
console.log(numFiltered);

*/

// Exemplo 2
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Nilton', idade: 22 },
    { nome: 'Geovana', idade: 9 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Lucas', idade: 23 },
    { nome: 'Matheus', idade: 12 },
];

const pessoaNomeGrande = pessoas.filter((value) => {
    return value['nome'].length >= 5;
});

console.log(pessoaNomeGrande);

const pessoaIdadeAcima = pessoas.filter((value) => {
    return value['idade'] > 50;
});

console.log(pessoaIdadeAcima);

const nomeComA = pessoas.filter((value) => value['nome'].toLowerCase().endsWith('a'));

console.log(nomeComA);