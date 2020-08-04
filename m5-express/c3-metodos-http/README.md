# Métodos HTTP

- **GET** → Pedidos de información
- **POST** → Envío de información / Creación de un registro
- **PUT** → Edición de todo el registro
- **PATCH** → Edición de parte del registro
- **DELETE** → Eliminación del registro

HTML solamente soporta GET y POST, siendo GET el método por defecto.

# Métodos HTTP en Node

Node siempre distingue el método por el que llega la ruta, por más que la dirección sea la misma.

## Parámetros

`req.params.loQueSea`

## Query String (GET)

`req.query.loQueSea`

## Body (POST)

`app.use(express.urlEncoded({ extended: false }));`

```
<form action="/ruta" method="POST">
    <input name="nombreDelCampo" type="text">
</form>
```

`req.body.nombreDelCampo`

## Otros métodos

`npm install method-override`

`const methodOverride = require('method-override');`

`app.use(methodOverride('_method'))`

```
<form action="/ruta?_method=PUT" method="POST">
    <input name="nombreDelCampo" type="text">
</form>
```

## Redirecciones

`res.redirect('/url')`

## Errores

Middleware al final de todas las rutas


```app.use((req, res, next) => {
    res.status(404).render('not-found');
})

```

Ruta con comodín para atajar todo.

```
app.get('*', function(req, res){
  res.send('what???', 404);
});

```