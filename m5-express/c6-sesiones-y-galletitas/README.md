# Sessions

Viven en el servidor. Son seguras.

`npm i express-session`

`const session = require('express-session')`

```
app.use(session({
    secret: 'sticker wizzard',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
}));
```

`req.session.propiedad = valor`
`req.session.propiedad`
`req.session.destroy();`

# Cookies

Viven en el navegador del visitante. Son inseguras.

`npm i cookie-parser`

`const cookieParser = require('cookie-parser')`

`app.use(cookieParser())`

`// Recordamos al usuario por 3 meses         msegs  segs  mins  hs   días`
`res.cookie('rememberToken', token, { maxAge: 1000 * 60  * 60 *  24 * 90 });`

`res.clearCookie('rememberToken');`

# res.locals

Nos permite enviar información a las vistas.

https://expressjs.com/es/api.html#res.locals

An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any).

`res.locals.loquesea = 'El valor que sea'`

Esto luego estará disponible para la vista.

# Hashing

Recomendamos usar [bcryptjs](https://www.npmjs.com/package/bcryptjs)

Genera un hash a partir de un string

`let hash = bcrypt.hashSync('bacon', 8);`

Genera un string con un hash

`bcrypt.compareSync("not_bacon", hash);`