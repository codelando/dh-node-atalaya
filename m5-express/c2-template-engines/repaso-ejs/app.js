const express = require('express');
const app = express();

// Configuración
// Las vistas tienen extension .ejs
// Las vistas están en la carpeta views
app.set('view engine', 'ejs');

app.use(express.static('public'));

// Rutas
const mainRoutes = require('./routes/index');
const groupsRoutes = require('./routes/groups');

app.use('/', mainRoutes);
app.use('/groups', groupsRoutes);

// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })