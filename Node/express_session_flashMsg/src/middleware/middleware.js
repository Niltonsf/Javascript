module.exports = (req, res, next) => {
    console.log('Isto é um middleware');
    next();
}