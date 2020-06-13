const fs = require('fs');
const chalk = require('chalk');

function leerArchivoJSON() {
    const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
    return JSON.parse(tareasJson);
}

// Microdesafío
// 1. Crear la funcion escribirArchivoJSON()
// - La función va a recibir un array
// - Van a convertir el array a JSON
// - Usando fs.writeFileSync van a escribir el archivo JSON

function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./tareas.json', tareasJson);
}

function todas() {
    let tareas = leerArchivoJSON();
    
    tareas.forEach(element => {
        console.log(element.titulo, '(' +  element.estado + ')');
    });
}

// Micro desafío
// 1. Crear función listar
// Toma como parámetro opcional el estado (pendientes, terminadas, etc)
// - Si llega el estado lista solo las de ese estado
// - Si no llega el estado, lista todas

function pendientes() {
    let tareas = leerArchivoJSON();

    let tareasFiltradas = tareas.filter(elem => elem.estado == 'pendiente');
    tareasFiltradas.forEach(element => {
        console.log(element.titulo,  '(' +  element.estado + ')');
    });
}

// Microdesafío
// 1. Atajar el caso de 'crear'
// 2. Hacer un console.log() de el titulo y de la descripción
// 3. Crear un objeto literal a partir de lo que envía el usuario
// {
//     "titulo": "una nueva",
//     "descripcion": "con su descripción",
//     "estado": "pendiente"
//    }

function crear(titulo = '', descripcion = '', estado = 'pendiente') {

    if (titulo.length > 5) {

        let tareas = leerArchivoJSON();

        let tareaNueva = {
            titulo: titulo,
            decripcion: descripcion,
            estado: estado
        }
        
        tareas.push(tareaNueva);
        
        escribirArchivoJSON(tareas);
        
        console.log('¡Tarea creada con éxito!')

    } else {
        console.log('Debes ingresar un título y debe tener al menos 5 caracteres');
    }

}


// Micro desafío
// 1. Atajar el caso de 'completar'
// 2. Vamos a recorrer el array de tareas
//  - usar map()
//  - usar un if()
// 3. Vamos a modificar la tarea que corresponda
// 4. Vamos a guardar los cambios


// Micro desafío
// 1. Atajar el caso de 'borrar'
// 2. Vamos a recorrer el array de tareas
//  - usar filter()
// 3. Vamos a filtrar la tarea que corresponda
// 4. Vamos a guardar los cambios

function borrar(titulo) {
    let tareas = leerArchivoJSON();

    let tareasActualizadas = tareas.filter(
        function(tarea) {
            return titulo !== tarea.titulo;
        }
    );

    if (tareas.length !== tareasActualizadas.length) {
        escribirArchivoJSON(tareasActualizadas);
        console.log('¡Tarea borrada exitosamente!');
    } else {
        console.log(chalk.inverse.red('No encontré esa tarea :-/'));
    }
}

module.exports = {
    todas, // todas: todas
    pendientes, // pendientes: pendientes
    crear,
    borrar
}