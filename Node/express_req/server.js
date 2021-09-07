const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// http://facebook.com/users/1234?campanha=googleads&nome_campanha=brasil

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar Texto</button>
        </form>
    `);
});

app.get('/testes/:idUsers?/:parametro?', (req, res) => {
    // /Ola/Tudbem
    console.log(req.params);
    // /?nome=Nilton&sobrenome=Schumacher&idade=20
    console.log(req.query);
    res.send(req.query);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Recebi isto: ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});