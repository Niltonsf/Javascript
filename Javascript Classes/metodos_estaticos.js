class ControleRemoto {
    constructor(tv) {
        this.tv;
        this.volume = 0;
    }

    // Método de instancia
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático (Não temos acesso aos elementos do contrutor)
    static trocaPilha() {
        console.log('Pilha trocada!');
    }

    static soma(x, y) {
        console.log(x + y);
    }
}

const controle = new ControleRemoto('LG');

controle.aumentarVolume();
console.log(controle);

ControleRemoto.trocaPilha();
ControleRemoto.soma(5, 6);