// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    //let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: false, // pode apagar a chave, ou reconfigurar a chave
        get: () => {
            return estoque;
        },
        set: (valor) => {
            if (typeof valor !== 'number') {
                console.log('Bad value');
                return;
            }
            estoque = valor;
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(Object.keys(p1));
p1.estoque = 10;
console.log(p1.estoque);