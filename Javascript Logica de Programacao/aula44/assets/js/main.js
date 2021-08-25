const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    tabelaImc();
});

function tabelaImc() {
    let resultadoImc;
    let peso = form.querySelector('.peso');
    peso = parseFloat(peso.value);
    let altura = form.querySelector('.altura');
    altura = parseFloat(altura.value);

    if (!peso || !altura)
        return;

    const imc = peso / (altura * altura);
    const p = document.createElement('p');
    const div = document.querySelector('.imc-resultado');

    div.innerHTML = '';

    if (imc < 18.5) {
        resultadoImc = "Abaixo do peso";
        p.classList.add('imc-bad');
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultadoImc = "Peso normal";
        p.classList.add('imc-good');
    } else if (imc >= 25 && imc <= 29.9) {
        resultadoImc = "Sobrepeso";
        p.classList.add('imc-medium');
    } else if (imc >= 30 && imc <= 34.9) {
        resultadoImc = "Obesidade grau 1";
        p.classList.add('imc-bad');
    } else if (imc >= 35 && imc <= 39.9) {
        resultadoImc = "Obesidade grau 2";
        p.classList.add('imc-bad');
    } else {
        resultadoImc = "Obesidade grau 3";
        p.classList.add('imc-bad');
    }

    p.innerHTML = `Seu IMC é ${imc.toPrecision(4)} (${resultadoImc})`
    div.appendChild(p);
}