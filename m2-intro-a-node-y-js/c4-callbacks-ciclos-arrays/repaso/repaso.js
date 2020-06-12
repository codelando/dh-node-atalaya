// Tipos de datos
let unArray = ['Tipos de datos', 'Funciones', 'Ciclos', 'Metodos de arrays', 'Destructuración'];

let otroArray = [10, 20, 30, -40, 50];

// Funcion - Declaración vs Ejecución

logTitle('Funciones')

function log(data) {
    console.log(data);
}

function logTitle(data) {
    log('');
    log(data);
    log('~'.repeat(data.length));
}

// Funcion nombrada
function elDoble(num) {
    return num * 2;
}

let resultado1 = elDoble(123);

console.log('♦ elDoble:', resultado1);

// Funcion anónima
let elTriple = function(num) {
    return num * 3;
}

let resultado2 = elTriple(333);

console.log('♦ elTriple:', resultado2);

// Arrow functions
// Son anónimas siempre
// => fat arrow
// let elCuadruple = (num) => { 
//     return num * 4 
// }

// let elCuadruple = num => { 
//     return num * 4 
// }

let elCuadruple = num => num * 4;

let resultado3 = elCuadruple(222);

console.log('♦ elCuadruple:', resultado3);

// Callbacks
logTitle('Callbacks');

let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;

let calculadora = (operacion, num1, num2) => operacion(num1, num2);

//                                               callback
//                                                  |
console.log('♦ Calculadora -> restar:', calculadora(restar, 34, 32));
console.log('♦ Calculadora -> sumar', calculadora(sumar, 34, 32));

// Métodos de arrays
logTitle('Métodos de arrays');

// Map
// Devuelve un nuevo array con elementos modificados

// [
//     'Tipos de datos', 
//     'Funciones', 
//     'Ciclos', 
//     'Metodos de arrays', 
//     'Destructuración'
// ];


// Con funciones normales
let unArrayMayusc = unArray.map(
    function (unElemento) {
        return unElemento.toUpperCase()
    }
);

// Con arrow functions
// let unArrayMayusc = unArray.map(
//     unElemento => unElemento.toUpperCase()
// );

console.log();
console.log('♦ Map -> mayúsculas:');
console.log(unArrayMayusc);

// Filter
// Devuelve solo los elementos que cumplen con la condicion del callback

let unArrayFiltrado = unArray.filter(
    function (unElemento) {
        return unElemento.length > 10
    }
);

// let unArrayFiltrado = unArray.filter(
//     unElemento => unElemento.length > 10
// );

console.log();
console.log('♦ Filter -> más de 10 caracteres:');
console.log(unArrayFiltrado);

// Si tuviéramos que programar filter podría verse algo como esto...
// function miFiltro(unArray) {
//     let nuevoArray = [];
//     for(let i = 0; i < unArray.length; i++) {
//         if (unArray[i].length > 10) {
//             nuevoArray.push(unArray[i])
//         }
//     }
//     return nuevoArray;
// }
// Reduce
// Reduce el array a un único valor

// Acumulador, elemento, valor inicial
let callback = function (acumulador, unElemento) {
    return acumulador = acumulador + unElemento[0];
}

let iniciales = unArray.reduce(callback,'');

console.log();
console.log('♦ Reduce -> iniciales:');
console.log(iniciales);

let sumaDeArray = otroArray.reduce(
    (acum, elem) => acum += elem
);

console.log();
console.log('♦ Reduce -> suma:');
console.log(sumaDeArray);


// Si tuviéramos que programar un reduce podría ser algo como...
// function miReducir(unArray, valorInicial) {
//     let resultado = valorInicial;
//     for(let i = 0; i < unArray.length; i++) {
//         resultado = resultado + unArray[i]
//     }
//     return resultado;
// }

// Nuestros callbacks
let aMayusculas = elem => console.log(elem.toUpperCase());
let aMinusculas = elem => console.log(elem.toLowerCase());

// LLamamos a nuestros callbacks
console.log();
console.log('♦ forEach -> mayúsculas:');
unArray.forEach(aMayusculas);

console.log();
console.log('♦ forEach -> minúsculas:');
unArray.forEach(aMinusculas);


// for of
// Recorre arrays (no usa callbacks)

logTitle('for ... of')

// for (let elem of array) {}
for (let unElemento of unArray) {
    console.log(unElemento);
}


// for in
// Recorre objetos (no usa callbacks)

logTitle('for ... in')


let unObjeto = {
    titulo: "Practicar el switch",
    descripcion: "Entender para qué puedo usarlo",
    estado: "pendiente"
};

console.log('unObjeto.titulo ->', unObjeto.titulo);
console.log("unObjeto['titulo'] ->", unObjeto['titulo']);
console.log();


// for (let prop in object) {}
for (let propiedad in unObjeto) {
    console.log('Nombre de la propidad:', propiedad)
    console.log('Valor de la propidad:', unObjeto[propiedad]);
    console.log();
}

// Destructuracion

// De arrays
// let [variable1, variable2] = array;

// De objetos
// let {prop1, prop2] = objeto;

// Spread operator
// ...array

// Rest parameter
// function (...params) {}