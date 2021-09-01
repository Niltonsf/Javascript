import * as Tags from './Tags';
import Geradores from './Geradores';

export default class ButtonsCheck {

    validate() {
        let num = false;
        let lower = false;
        let upper = false;
        let simbol = false;
        const passwordSize = Tags.passSize.value;

        if (!Tags.numbers.checked && !Tags.lowercase.checked && !Tags.uppercase.checked && !Tags.simbols.checked) {
            return;
        } else if (passwordSize === '') {
            return;
        } else {
            Tags.numbers.checked ? num = true : num = false;
            Tags.lowercase.checked ? lower = true : lower = false;
            Tags.uppercase.checked ? upper = true : upper = false;
            Tags.simbols.checked ? simbol = true : simbol = false;
        }

        const finalPass = this.createPass(passwordSize, upper, lower, num, simbol);

        return finalPass;
    }

    createPass(qtd, maisculas, minusculas, numeros, simbolos) {
        const gerador = new Geradores();
        const passArr = [];
        qtd = Number(qtd);

        for (let i = 0; i < qtd; i++) {
            maisculas && passArr.push(gerador.genMaiusculas());
            minusculas && passArr.push(gerador.genMinusculas());
            numeros && passArr.push(gerador.genNumber());
            simbolos && passArr.push(gerador.genSimbols());
        }

        return passArr.join('').slice(0, qtd);
    }
}