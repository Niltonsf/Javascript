//  Factory Function (Função Fábrica)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${nome} está ${assunto}`
        },
        altura: altura,
        peso: peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Nilton', "Schumacher", 1.70, 70);
console.log(p1.nomeCompleto);
console.log(p1.imc);
p1.nomeCompleto = 'Maria Oliveria Silva';
console.log(p1.nomeCompleto);