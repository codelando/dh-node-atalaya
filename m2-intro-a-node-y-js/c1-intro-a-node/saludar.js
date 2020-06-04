// Cuando creamos un módulo, siempre vamos a necesitar exportar
// aquello que queramos que esté disponible para quien lo use.
module.exports = function (name) {
    return "Hola " + name + " ¿cómo estás?";
}