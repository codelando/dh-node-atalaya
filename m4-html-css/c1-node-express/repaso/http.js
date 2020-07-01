const http = require('http');
http.createServer((req, res) => {
    console.log(req);

    switch (req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Servidor hecho con HTTP');   
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Es página aun no existe');
            break;
    }


}).listen(3000, 'localhost');