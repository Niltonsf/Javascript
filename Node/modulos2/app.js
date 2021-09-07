const path = require('path');
console.log(path.resolve(__dirname, '..', '..'));
const mult = require('./mod2');

console.log(mult(2, 2));

/*
. -> Representa a pasta base
/ -> ir pra frente
.. -> Voltar uma pasta
*/