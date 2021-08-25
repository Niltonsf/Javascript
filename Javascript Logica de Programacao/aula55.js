// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Schumacher',
    idade: 20
};

for (let index in pessoa) {
    console.log(index);
}

/*
const frutas = ['Pera', 'Maça', 'Uva'];

for (let index in frutas) {
    console.log(frutas[index]);
}*/