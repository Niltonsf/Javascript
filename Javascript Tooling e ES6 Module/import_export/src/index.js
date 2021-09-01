import mult, { nome, sobrenome } from './modulo1';

console.log(nome, sobrenome);
console.log(mult(5, 5));

/*
import * as MeuModulo from './modulo1';

console.log(MeuModulo);

****************************************************************************************

import { nome, sobrenome, idade, soma, Pessoa } from './modulo1';

console.log(nome, sobrenome, idade);
console.log(soma(4, 5));

const p1 = new Pessoa('Nilton', 'Schumacher');
console.log(p1);
*/