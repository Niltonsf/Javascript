const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
    req.session = { nome: 'Nilton', sobrenome: 'Schumacher' };
    console.log();
    console.log("Passei no seu middleware");
    console.log();
    next();
}

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, (req, res, next) => {
    console.log();
    console.log('Ainda estou aqui...');
    console.log(`Olha o que tem no req.session.nome: ${req.session.nome}`);
});
route.post('/', homeController.postTreat);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;