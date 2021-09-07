const path = require('path');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

// const pessoas = [
//     { nome: 'Joao' },
//     { nome: 'Nilton' },
//     { nome: 'Geovana' },
//     { nome: 'Luiza' },
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const resultado = await ler(caminho);
    renderizaDados(resultado);
}

function renderizaDados(param) {
    param = JSON.parse(param);
    param.forEach(val => console.log(val.nome));
}

leArquivo(caminhoArquivo);