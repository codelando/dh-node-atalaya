// Módulo nativo
// https://nodejs.org/docs/latest-v12.x/api/fs.html
const fs = require('fs');

// Módulos de terceros
// https://www.npmjs.com/package/chalk
const chalk = require('chalk');

// Módulos propios
const saludar = require('./saludar.js')

// Leemos el archivo saludo.txt
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_readfilesync_path_options
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_fs_readfile_path_options_callback
console.log(fs.readFileSync('./saludo.txt', 'utf8'));

// __dirname contiene el path absoluto hacia el archivo donde se invoca
console.log();
console.log('__dirname', __dirname);

console.log();
console.log(chalk.green.inverse('Estamos en pepinito.js'));

console.log();
console.log(chalk.blue.inverse(saludar('Nacho')));