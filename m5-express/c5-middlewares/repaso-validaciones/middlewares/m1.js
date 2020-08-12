module.exports = (req, res, next) => {
    console.log('Inicio del middleware 1');
    next();
    console.log('Fin del middleware 1');
}