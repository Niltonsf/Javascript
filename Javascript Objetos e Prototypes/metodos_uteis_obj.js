/*
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Ja vimos
Object.keys (retorna chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Caneca', preco: 1.8 };
const outroProduto = {...produto, material: 'Porcelana' };
const outroProduto2 = Object.assign({}, produto, { materia: 'porcelana' });

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
outroProduto.nome = 'MacAneca'
console.log(outroProduto);