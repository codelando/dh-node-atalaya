let sumar = require('./sumar');

// Desafío
// 1. Modularizar el resto de las funciones
// 2. Crear una función / modulo que me diga si un número es múltiplo del otro.

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    // Si el num1 o num2 es 0 entonces devuelvo 0
    if (num1 === 0 || num2 === 0) {
        return 0;
    // Sinó devuelvo la multiplicación
    }

    console.log('Ninguno de los número era 0');
    return num1 * num2;
}

let dividir = function (num1, num2) {
    if (num2 === 0) {
        return "No se puede dividir por 0, a menos que seas Chuck Norris";
    } else {
        return num1 / num2;
    }
}

// Recuerden el tema del scope
// num1 y num2 acá son completamente independientes de los que están en la declaración
// de la función sumar.
let num1 = 0;
let num2 = 10;

let resSumar = sumar(num1, num2);
let resRestar = restar(num1, num2);
let resMultiplicar = multiplicar(num1, num2);
let resDividir = dividir(num1, num2);

let funcion = dividir;

console.log(resDividir);
console.log('Resultado de sumar', resSumar);

console.log(funcion);
console.log(funcion(10, 20));