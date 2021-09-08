exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.postTreat = (req, res) => {
    res.send('Sou a nova rota');
}