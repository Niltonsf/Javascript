const nomes = ['Nilton', 'Joao', 'Geovana', 'Pedro'];
// nomes.splice(indice, delete, elemento1 , elemento2);
//pop
//nomes.splice(3, 1)
//console.log(nomes);
const removidos = nomes.splice(2, 2);
const adiciona = nomes.splice(0, 0, 'Adicionado');
console.log(nomes, removidos);