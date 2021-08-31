class DisplositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    get estado() {
        return this.ligado;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} está ligado!`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} está desligado!`);
            return;
        }
        this.ligado = false;
    }
}

class SmartPhone extends DisplositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Table extends DisplositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Voce alterou o metodo ligar');
    }
}

const smartPhone = new SmartPhone('Iphone', 'Space Grey', 'XR');

console.log(smartPhone);