function numAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('BAD VALUE');
                return;
            };

            resolve(msg.toUpperCase());
        }, tempo);
    });
}

// esperaAi('Frase 1', numAleatorio(0, 3)).then((valor) => {
//     console.log(valor);
//     return esperaAi('Frase 2', numAleatorio(0, 3));
// }).then((valor) => {
//     console.log(valor);
//     return esperaAi('Frase 3', numAleatorio(0, 3));
// }).then((valor) => {
//     console.log(valor);
// });

async function executa() {
    try {
        const fase1 = await esperaAi('Frase 1', numAleatorio(0, 3));
        console.log(fase1);
        const fase2 = await esperaAi(1, numAleatorio(0, 3));
        console.log(fase2);
        const fase3 = await esperaAi('Frase 3', numAleatorio(0, 3));
        console.log(fase3);
        console.log('Terminamos na fase: ', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();