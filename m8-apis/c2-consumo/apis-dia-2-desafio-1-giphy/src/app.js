const express = require('express');
const app = express();
const phrases = require('./frases');
const giphy = require('./requests/giphyRequests');

// Static files and template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Micro desafío 1
// 1. Crear el archivo del recurso →  /requests/giphyRequests.js
// 2. Module Exports --> objeto literal  --> método get404Gif()
// 3. Return:
//         return {
//     title: 'No found',
//     url: "https://media4.giphy.com/media/14uQ3cOFteDaU/giphy.gif?cid=d432ccfdzqzz1n4bsd0ougrlom1axcxf7ury6hhh4knieoua&rid=giphy.gif"
// }

// Micro desafío 2
// 1. Requerir el archivo de requests
// 2. En render ejecutar el método y pasar el gif a la vista
// 3. En la vista, pegar el src

// Micro desafío 4
// 1. Hacer el pedido, cuando llegue el resultado...
// 2. Elegir un gif
// 3. Enviarlo a la vista


// Routes
app.get('*', (req, res) => {

    giphy.get404Gif()
        .then(function (response) {

            const message = phrases[Math.floor(Math.random() * phrases.length)];

            const randomGif = response.data.data[Math.floor(Math.random() * response.data.data.length)];
            const image = {
                url: randomGif.images.original.url , 
                title: randomGif.title
            }

            res.status(404).render('404', { message, image });
        })
        .catch(function (error) {
            console.log(error);
        })

});

// Server
app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });