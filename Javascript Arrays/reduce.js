/* Reduce -> Interessante para reduzir o array
 podemos mandar um valor inicial pro acumulador, no caso dessa função é zero

 const total = numeros.reduce((acumulador, valor, indice) => {
    acumulador += valor;
    return acumulador;
}, 0);



// Exemplo 1
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice) => {
    acumulador += valor;
    return acumulador;
}, 0);
*/

// Exemplo 2
// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Nilton', idade: 22 },
    { nome: 'Geovana', idade: 9 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Lucas', idade: 23 },
    { nome: 'Matheus', idade: 12 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
});

console.log(maisVelha);