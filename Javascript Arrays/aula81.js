// Valor por referência

const nomes = ['Nilton', 'Geovana', 'Pedro', 'Rosana'];
const novo = nomes;
const copyArray = [...nomes];

const newArr = nomes.slice(1, 3);
const newArr2 = nomes.slice(0, -1);

console.log(newArr);
console.log(newArr2);

const nome = 'Nilton Antonio Schumacher';
const separate = nome.split(' ');
console.log(separate);

/*
nomes[2] = 'Joao';
delete nomes[2];
const removido = nomes.pop();
const removidoPrimeiro = nomes.shift();
console.log(nomes);
console.log(novo);
console.log(copyArray);

nomes.push('Lucas');
nomes.unshift('Nilton');
console.log(nomes);
console.log(novo);
*/