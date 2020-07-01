const express = require('express');
const app = express();

// Podemos enviar HTML
app.get('/', function (req, res) {
    res.send('<h1>¡Página principal!</h1>')
});

const dependencies = {
    "dependencies": {
        "express": "^4.17.1"
      },
    "devDependencies": {
    "nodemon": "^2.0.4"
    }
}

// También podemos enviar cualquier tipo de dato de JS
// Express se encargará de convertirlo a JSON
app.get('/package', function (req, res) {
    res.send(dependencies);
})


// Escuchamos en el puerto 3000
app.listen(3000);