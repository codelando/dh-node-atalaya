# Path

Nos permite manipular rutas y nombres de archivos

Join nos permite obtener un path completo a través de porciones, normalmente se usa en conjunto a la variable `__dirname`

`path.join(__dirname, '../data/groups.json')`

Basename nos da el nombre del archivo

`path.basename('../data/groups.json')`

Extname nos da la extensión del archivo

`path.extname('../data/groups.json')`

Dirname nos da el nombre del directorio

`path.dirname('../data/groups.json')`

# FileSystem

Leer un archivo con fileSystem

`fs.readFileSync(filePath, 'utf8')`

Escribir un archivo con fileSystem

`fs.writeFileSync(filePath, fileContents);`

# Hashing

Recomendamos usar [bcryptjs](https://www.npmjs.com/package/bcryptjs)

Genera un hash a partir de un string
`let hash = bcrypt.hashSync('bacon', 8);`

Genera un string con un hash

`bcrypt.compareSync("not_bacon", hash);`

# Manipulación de archivos 

## En el archivo de rutas

```
const multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname))
  }
})

var upload = multer({ storage: storage })
```

## En la ruta donde subimos el arhivo

`router.post('/', upload.sigle(fieldname), controller.store);`

## En el controlador 

Ejecutado multer en el controlador dispondremos del objeto file dentro del request

`req.file.filename`
