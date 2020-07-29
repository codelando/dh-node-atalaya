# Repaso de express

## Estructura de archivos y directorios

```
.
├── .gitignore
├── package.json
├── package-lock.json
├── controllers
│   └── unController.js
│   └── etc...
├── public
│   └── css
│       └── styles.css
├── routes
│   └── unRouter.js
│   └── etc...
├── views
│   ├── unaPagina.html
│   └── etc...
└── app.js
```

# Rutas

Nos permiten definir todas las direcciones que nuestro servidor escuchará. Las que no se definan y no se atajen, generarán un error.

## Parametrizadas

`:parametro`

req.params.parametro

## Opcionales

`:opcional?`

# MVC

## Archivo de rutas

**Los archivos de rutas**
- Van en la carpeta routes
- Un archivo por entidad o conjunto de rutas
    - Requerir express + express.Router()
    - Crear las rutas
    - Exportar el resultado

**En el app.js**
- Importar los archivos de rutas
- app.use() por cada uno de ellos con el punto de entrada correspondiente

## Controlador

**Los archivos de controladores**
- Carpeta controllers
- Un archivo por entidad o conjunto de rutas
    - Objeto literal con un método por acción
    - Exportar el resultado

**En el archivo de rutas**
- Importar el controlador
- llamar al método que corresponda dentro de cada ruta
