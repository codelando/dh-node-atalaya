const fs = require('fs');

console.log('Aplicación de tareas');
console.log('--------------------');
console.log('');

// String, no nos alcanza
// let tarea = 'Practicar el switch';

// Objeto literal, mucho mejor
// let tarea = {
//     titulo: 'Practicar el switch',
//     descripcion: 'Entender para qué puedo usarlo',
//     estado: 'pendiente'
// }

// Micro desafío
// Queremos tener más de una tarea
// let tareas = [
//     {
//         titulo: 'Practicar el switch',
//         descripcion: 'Entender para qué puedo usarlo',
//         estado: 'pendiente'
//     }, 
//     {
//         titulo: 'Practicar el for',
//         descripcion: 'Entender cómo se usa',
//         estado: 'en progreso'
//     },
//     {
//         titulo: 'Objeto literal vs JSON',
//         descripcion: '¿Qué tienen de diferente?',
//         estado: 'terminada'
//     },
//     {
//         titulo: 'Refactorear con un forEach()',
//         descripcion: 'Magic magic magic',
//         estado: 'terminada'
//     }
// ];

// Microdesafío
// Crear archivo tareas.json
// Leer el achivo de tareas.json con el módulo fs.
// Parsear el contenido para acceder a los datos.

let tareas = fs.readFileSync('./tareas.json', 'utf-8');
tareas = JSON.parse(tareas);

// Micro desafío
// 1. Recorrer el array
// 2. De cada tarea mostrar el título

// Micro desafío
// Crear funcion listarTodas() que liste todas las tareas

function listarTodas() {
    console.log();
    console.log('Todas las tareas');
    console.log('--------------------');
    for(let i = 0; i < tareas.length; i++) {
        console.log('♦ ' + tareas[i].titulo + ' → ' + tareas[i].estado);
    }
}

// Micro desafío
// 1. Recorrer el array
// 2. De cada tarea mostrar el título
// Solo si la tarea esta pendiente o en progreso

// Micro desafío
// Crear funcion listarNoTermiandas()

function listarNoTermiandas() {
    console.log();
    console.log('Tareas no terminadas');
    console.log('--------------------');
    for(let i = 0; i < tareas.length; i++) {
        if (tareas[i].estado !== 'terminada') {
            console.log('♦ ' + tareas[i].titulo + ' → ' + tareas[i].estado);
        }
    }    
}

listarTodas();
listarNoTermiandas();
