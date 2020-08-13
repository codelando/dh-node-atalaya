module.exports = (req, res, next) => {
    console.log('Inicio del middleware 2');
    next();
    console.log('Fin del middleware 2');
}