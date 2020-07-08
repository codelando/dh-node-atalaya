const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req, res) => {
    res.send(req.body);
});


app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });