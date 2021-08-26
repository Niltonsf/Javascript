// Funções geradoras

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5() {
    yield
    function() {
        console.log('Vim do y1');
    };

    yield
    function() {
        console.log('Vim do y2');
    };
}

const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}

/*
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}
*/