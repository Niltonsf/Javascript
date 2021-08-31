// 705.484.450-52 070.987.720-03
/*
 */

function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;

    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = [...cpfParcial];
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCpf.prototype.isSequencia = function() {
    return (this.cpfLimpo[0].repeat(this.cpfLimpo.length)) === this.cpfLimpo;
};

const finalCpf = new ValidaCpf('705.484.450-52');
console.log(finalCpf.valida());