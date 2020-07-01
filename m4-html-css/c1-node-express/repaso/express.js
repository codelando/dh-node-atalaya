const express = require('express');
const app = express();

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

app.get('/package', function (req, res) {
    res.send(dependencies);
})

app.listen(3000);