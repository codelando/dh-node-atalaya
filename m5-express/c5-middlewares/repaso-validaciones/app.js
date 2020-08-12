const express = require('express');
const app = express();
const methodOverride = require('method-override');
//const maintenanceMode = require('./middlewares/maintenance');

// Configuración
// Las vistas tienen extension .ejs
// Las vistas están en la carpeta views

app.set('view engine', 'ejs');


// Template Engines
app.use(express.static('public'));
//app.use(maintenanceMode);

// Formularios
app.use(express.urlencoded({ extended: false })); // Arma el objeto body
app.use(methodOverride('_method')); // Verifica si existe _method en el queryString

// Rutas
const mainRoutes = require('./routes/index');
const groupsRoutes = require('./routes/groups');

app.use('/', mainRoutes);
app.use('/groups', groupsRoutes);

// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })