# Template Engines o Motores de plantillas

## Instalación y configuración

1. Vamos a usar **EJS**

`npm install ejs`

2. En el **app.js**...

`app.set('view engine', 'ejs');

El método `app.set()` se utiliza para todo lo que queramos configurar en express, en este caso el motor de plantillas (vistas).

3. La vistas irán en la carpeta **views** (a menos que configuremos otra cosa) y llevarán la extensión **.ejs**

4. Finalmente, si usan Visual Studio Code, les recomiendo installar la extención _EJS languaje support_ o alguna similar.

## Uso de las vistas

Con un motor de plantillas ya no podemos usar **res.sendfile()** porque el archivo es ahora dinámico y tiene que renderizarse, por esta razón a partir de ahora usaremos **res.render()**

`res.render('vista');`

Cuando hacemos render, podemos enviar datos a la vista para que estén disponibles. Eso lo hacemos agregando un segúndo parámetro al método **render()**.

`res.render('vista', {dato: valor});`

## Los tags

### Lógica de JS

Permite implementar lógica de JavaScript en en archivo HTML.

```
<% tu javascript aquí %>
    <!-- HTML por aquí -->
<% tu javascript aquí %>
```

### Impresión

Permite imprimir en el HTML.

`<%= lo que vayas a imprimir aquí %>`

### Inclusión

Permite incluir otros archivos .ejs dentro del actual.

`<%- include('path/relativo') %>`

También podemos pasarle parámetros

`<%- include('path/relativo', {dato: valor}) %>`

### Comentario

`<%# Comentario %>`