const fs = require('fs');
const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
const tareas = JSON.parse(tareasJson);

// process.argv
// Trae todos los parámetros

let accion = process.argv[2];

switch (accion) {
    // Si ponemos más de un caso, todos ejecutan el código del último de la lista
    case undefined:
    case 'todas':
        tareas.forEach(element => {
            console.log(element.titulo, '(' +  element.estado + ')');
        });
        break;
    case 'pendientes':
        let tareasFiltradas = tareas.filter(elem => elem.estado == 'pendiente');
        tareasFiltradas.forEach(element => {
            console.log(element.titulo,  '(' +  element.estado + ')');
        });
        break;
    // default ataja cualquier otro caso (similar al *else* que usamos en el *if*)
    default:
        console.log();
        console.log('No entiendo esa acción');
}