const fs = require('fs');
const path = require('path');

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/products', (req,res) => {
    let products = fs.readFileSync(path.join(__dirname, 'data/products.json'));
    products = JSON.parse(products);

    res.json({
        meta: {
            totalProducts: products.length,
            totalAmount: products.reduce((total, product) => total += product.price, 0).toFixed(2)
        },
        data: products
    })
});

app.get('*', (req, res) => {
    res.status(404).json({
        error: 'Página no encontrada'
    })
})

app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000')});