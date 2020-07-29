// Micro desafío 
// -------------
// 1. Inicializar proyecto de npm
// 2. Instalar express y nodemon
// 3. (opcional) Crear script para nodemon
// 4. Crear estructura de carpetas
//    - views
//       - index.html
//    - public
//       - css/styles.css
// 5. (opcional) Crear archivo .gitignore

const express = require('express');
const app = express();

// Archivos de rutas
const mainRoutes = require('./routes/main');
const studentRoutes = require('./routes/students');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/students', studentRoutes);

app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })