// Función de multiplicar
module.exports = function multiplicar(num1, num2) {
    // Si el num1 o num2 es 0 entonces devuelvo 0
    if (num1 === 0 || num2 === 0) {
        return 0;
    }

    // De lo contrario devuelvo la multiplicación
    return num1 * num2;
};