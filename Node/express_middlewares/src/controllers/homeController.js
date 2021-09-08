exports.paginaInicial = (req, res, next) => {
    res.render('index');
    next();
}

exports.postTreat = (req, res) => {
    res.send('Sou a nova rota');
    return;
}