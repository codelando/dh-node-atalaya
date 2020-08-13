module.exports = (req, res, next) => {
    console.log('Inicio del middleware 3');
    next();
    console.log('Fin del middleware 3');
}