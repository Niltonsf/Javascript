//const nome = 'Nilton Schumacher'
const nome = ['Nilton', 'Geovana', 'Pedro'];
/*
for (let valor of nome) {
    console.log(valor);
}
*/

nome.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});