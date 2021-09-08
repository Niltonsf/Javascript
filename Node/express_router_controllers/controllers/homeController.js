exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar Texto</button>
        </form>
    `);
}

exports.postTreat = (req, res) => {
    res.send('Sou a nova rota');
}