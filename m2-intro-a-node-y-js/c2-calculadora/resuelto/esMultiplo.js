// Función para saber si un número es múltiplo de otro
module.exports = function esMultiplo(num1, num2) {
    // Si el resto de una división es 0, entonces el dividendo es múltiplo del divisor
    return num1 % num2 == 0;
};