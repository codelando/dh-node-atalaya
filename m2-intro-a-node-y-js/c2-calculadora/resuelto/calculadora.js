// Requerimos los móludos que vamos a utilizar
let sumar = require('./sumar');
let restar = require('./restar');
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');
let esMultiplo = require('./esMultiplo');

let num1 = 50;
let num2 = 10;

let resSumar = sumar(num1, num2);
let resRestar = restar(num1, num2);
let resMultiplicar = multiplicar(num1, num2);
let resDividir = dividir(num1, num2);
let resMultiplo = esMultiplo(num1, num2);

console.log('Resultado de sumar', resSumar);
console.log('Resultado de restar', resRestar);
console.log('Resultado de multiplicar', resMultiplicar);
console.log('Resultado de dividir', resDividir);
console.log('Resultado de multiplo', resMultiplo);