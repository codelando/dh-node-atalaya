const path = require('path');

module.exports = {
    index: (req, res) => {
        // res.sendFile(path.join(__dirname, '/../views/index.html'));
        let title = 'Repaso de motores de plantillas --> EJS';
        let items = [
            'Instalación y configuración',
            'Uso de las vistas',
            'Los tags'
        ];

        res.render('index', { title, items });
    }
}