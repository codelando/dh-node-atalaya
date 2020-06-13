const tareas = require('./tareas');

// process.argv
// Trae todos los parámetros con los que se ejecutó el programa

let accion = process.argv[2];
let parametros = process.argv.slice(3);

switch (accion) {
    // Si ponemos más de un caso, todos ejecutan el código del último de la lista
    case undefined:
    case 'todas':
        tareas.todas();
        break;

    case 'pendientes':
        tareas.pendientes();
        break;

    case 'crear':
        tareas.crear(parametros[0], parametros[1])
        break;
 
    case 'borrar':
        tareas.borrar(parametros[0])
        break;

    default:
        console.log();
        console.log('No entiendo esa acción');
}