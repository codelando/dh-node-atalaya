const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const auth = require('./middlewares/auth');

// Configuración
// Las vistas tienen extension .ejs
// Las vistas están en la carpeta views
app.set('view engine', 'ejs');

// Template Engines
app.use(express.static('public'));
//app.use(maintenanceMode);

// Sessiones y galletitas
app.use(session({
    secret: 'Admin de grupos',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
}));
app.use(auth);

// Formularios
app.use(express.urlencoded({ extended: false })); // Arma el objeto body
app.use(methodOverride('_method')); // Verifica si existe _method en el queryString

// Rutas
const mainRoutes = require('./routes/index');
const groupsRoutes = require('./routes/groups');
const usersRoutes = require('./routes/users');

app.use('/', mainRoutes);
app.use('/groups', groupsRoutes);
app.use('/users', usersRoutes);


// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto 3000.') })