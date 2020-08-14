const fs = require('fs');
const path = require('path');

// Micro desafío
// 1. crear funcion readFile()
// - Leer el archicho
// - Devolver los contenido en formato JavaScript
// - Si no hay nada, devolver un array vacío

// Micro desafío
// 1. crear funcion writeFile()
// - Recibe datos a escribir
// - Los convierte a JSON
// - Los guarda en el archivo

let model = function(tableName) {
    return {
        filePath: path.join(__dirname, '../data/' + tableName + '.json'),
        readFile() {
            let fileContents = fs.readFileSync(this.filePath, 'utf8');
        
            if(fileContents) {
                return JSON.parse(fileContents);
            }
        
            return [];
        },
        writeFile(contents) {
            let fileContents = JSON.stringify(contents, null, " ");
            fs.writeFileSync(this.filePath, fileContents);
        },
        nextId() {
            let rows = this.readFile();
            let lastRow = rows.pop();

            if (lastRow) {
                return ++lastRow.id;
            }

            return 1;
        },
        all() {
            return this.readFile();
        },
        find(id) {
            let rows = this.readFile();
            return rows.find(row => row.id == id);
        },
        findByField(field, value) {
            // Microdesafío
            // 1. Leer el archivo
            // 2. Buscar por campo y valor
            // 3. retornar los resultados
            let rows = this.readFile();
            return rows.find(row => row[field] == value);
        },
        findAllByField(field, value) {
            // Microdesafío
            // 1. Leer el archivo
            // 2. Buscar por campo y valor
            // 3. retornar los resultados
            let rows = this.readFile();
            return rows.filter(row => row[field] == value);
        },
        create(row) {
            // Microdesafío
            // 1. Leer el archivo
            // 2. Generar un nuevo id
            // 3. Agregar el registro
            // 4. guardar los cambios
            let rows = this.readFile();
            row.id = this.nextId();
            rows.push(row);

            this.writeFile(rows);

            return row.id;
        },
        update(row) {
            // Microdesafío
            // 1. Leer el archivo
            // 2. Modificar el registro en cuestion
            // - map()
            // 3. Guardar los cambios
            // 4. Devolver el id modificado
            let rows = this.readFile();
            let updatedRows = rows.map(oneRow => {
                if (oneRow.id == row.id) {
                    return row;
                }

                return oneRow;
            }); 

            this.writeFile(updatedRows);

            return row.id;
        },
        delete(id) {
            // Microdesafío
            // 1. Leer el archivo
            // 2. Filtran el registro en cuestion
            // 3. Guardar los cambios
            let rows = this.readFile();
            let updatedRows = rows.filter(oneRow => oneRow.id != id); 

            this.writeFile(updatedRows);
        }
    }
}

module.exports = model;