// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // pode ser alterado
        configurable: false // pode apagar a chave, ou reconfigurar a chave
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: estoque, // valor da chave
            writable: true, // pode ser alterado
            configurable: true // pode apagar a chave, ou reconfigurar a chave
        },
        preco: {
            enumerable: true, // mostra a chave
            value: estoque, // valor da chave
            writable: true, // pode ser alterado
            configurable: false // pode apagar a chave, ou reconfigurar a chave
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
console.log(p1);