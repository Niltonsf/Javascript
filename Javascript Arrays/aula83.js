const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const conc = a1.concat(a2, [7, 8, 9], 'Luiz');
const conc2 = [...a1, ...a2, 'Luiz', ...[7, 8, 9]];

console.log(conc);
console.log(conc2);