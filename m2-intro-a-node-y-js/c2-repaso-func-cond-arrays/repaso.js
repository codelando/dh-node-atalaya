// - Variables (var, let, const)
let elNombreDeLaVariable = 3;
var otraVariable = 5;
const unaConstante = 10;

elNombreDeLaVariable = "Declarada con let";

// console.log(elNombreDeLaVariable);

// - Tipos de datos
//     - numero, string, booleano, array, objeto literal
//     - NaN, null, undefined
let unNumero = 100000; // También puede ser 10.5
let unTexto = "Algo por aquí";
let otroTexto = 'Algo por aquí';
let unBoolean = true; // false

let unArray = [10, '10', unNumero, [unTexto, otroTexto]];

let unObjeto = {
    unNumero: 10,
    unasPalabras: 'Bla bla bla'
}

let indefinido;

// console.log(indefinido);

let nulo = null;

// - Operadores
//     - Asignacion
//     - Aritméticos
//     - Comparación
//     - Lógicos

let suma = 1 + 2;
let division = 345 / 23;
let modulo = 10 % 5;

// Los operadores de comparación devuelven booleano
let esMayor = 46 > 9; // > <= >= <

// Lógica boolean
let nombre = "Ale";
let edad = 34; 

let esVerdad = (nombre === "Ale") && (edad === 34);


let concatenacion = 10 + "12";

// console.log(typeof edad === 'string');

// - Funciones
function esMayorDeEdad(edad) {
    return edad > 18;
}

console.log('Resultado de la función', esMayorDeEdad(25));

edad = 20;

// - Condicionales
if (edad > 21) {
    console.log('Es mayor de edad');
} else if (edad >= 18 && edad < 21) {
    console.log('Es casi mayor de edad');
} else {
    console.log('Es menor de edad'); 
}

// - Arrays
//     - push, pop, shift, unshift, indexOf, includes, find
let otroArrayMas = ["push", "pop", "shift", "unshift", "indexOf", "includes"];

console.log(otroArrayMas[5]);

console.log(otroArrayMas.length);

console.log(otroArrayMas.indexOf('pop'));

let elUltimoElemento = otroArrayMas.pop();

console.log(elUltimoElemento);

console.error('Un error');


let unNombre = 'Juan';

if (unNombre) {
    console.log('Tengo un nombre');
} else {
    console.log('No tengo un nombre');
}