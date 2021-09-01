// Promise.all Promise.race Promise.resolve Promise.reject
function numAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('BAD VALUE');
            return;
        }

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

const promises = [
    //'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    //esperaAi(1000, 1000),
    //'Outro valor'
];

Promise.race(promises).then((valor) => {
    console.log(valor);
}).catch((error) => {
    console.log(error);
});