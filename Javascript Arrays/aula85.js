/* 
Map -> Sempre tem o mesmo tamanho do array original

const numerosEmDobro = numeros.map(function(valor, indice, array) {
    console.log(valor, indice, array);
});

*/

// Exemplo 1
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((valor, indice, array) => valor * 2);

console.log(numerosEmDobro);
*/

// Exemplo 2
// Quando fazemos alguma alteração, fazemos alteração no objeto original, 
// devese fazer uma copia caso isso não seja necessario
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Nilton', idade: 22 },
    { nome: 'Geovana', idade: 9 },
    { nome: 'Pedro', idade: 35 },
    { nome: 'Lucas', idade: 23 },
    { nome: 'Matheus', idade: 12 },
];

const retornaStringNome = pessoas.map((value) => value['nome']);

console.log(retornaStringNome);

const removeNome = pessoas.map((value) => {
    delete value.nome;
    return value;
});

console.log(removeNome);

const addKey = pessoas.map((value, index) => {
    value.id = index;
    return value;
});

console.log(addKey);