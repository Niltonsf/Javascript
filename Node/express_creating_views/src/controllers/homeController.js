exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.postTreat = (req, res) => {
    res.send('Sou a nova rota');
    return;
}