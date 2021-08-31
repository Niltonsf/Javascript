function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y preciam ser números');
    }

    return x + y;
}

try {
    console.log(soma(5, '4'));
} catch (e) {
    console.log(e)
}

/*
try {
    console.log(naoExiste);
} catch (err) {
    console.log('Não existo');
}
*/