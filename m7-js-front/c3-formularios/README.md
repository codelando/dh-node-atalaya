# Interacción con formularios

## Eventos

Nos permite detectar cuando el usuario...

**focus** → ingresa un campo

**blur** → sale de un campo

**change** → cambia el valor de un campo

**sumbit** → envía el formulario

Especialmente para el envío del formulario, vamos a querer prevenir que ocurra en algunos casos con el método `preventDefault()` del evento que estamos capturando.

## Accediendo a los campos

Por defecto los campos de un formulario estarán definidos por su propiedad `name`, lo recomendable es agregarles un `id` con el mismo valor que tenga la propiedad `name`. De esta manera podemos hacer funcionar los **labels** y ademas acceder a cada campo con el método `document.getElementById()`

## Validando

1. Acá vamos a estar usando la propiedad `value` de nuestros campos en la gran mayoría de los casos.

2. Vamos a querer tener algún elemento donde almacenar los errores.

3. Si el elemento no está vacío es que tenemos errores y vamos a querer:
    - Prevenir el envío del formulario
    - Mostrar los errores

4. Si el elemento está vacío, es que no tenemos errores y podemos enviar el formulario sin problemas.

Si quieren saber más pueden ver [ésta página de Mozilla](https://developer.mozilla.org/es/docs/Learn/HTML/Forms/Validacion_formulario_datos)

### Validando si tenemos Node + Express del otro lado

https://express-validator.github.io/docs/

https://github.com/validatorjs/validator.js


# Location y history

## Location

El objeto location contiene toda la información referente a la URI actual

### Propiedades y métodos

`location.href` → Nos permite saber la URI actual, también nos permite ir a otra página si cambiamos el valor.

`location.reload()` → Nos permite recargar la página actual.

`location.search` → Nos permite acceder al query string (todo lo que va después del ?).

### URLSearchParams

Para trabajar de manera más simple sobre **search** Javascript nos provee la clase **URLSearchParams**

`let query = new URLSearchParams(location.search);`

`query.has('loquesea');` → Pregunta si el parámetro existe

`query.get('loquesea');` → Nos trae el valor, si existe o `null`

## History

Nos permite manejar el historial

### Propiedades y métodos

`history.length` → Cantidad de elemento en el historial

`history.back()` → Lo mismo que hacer atrás en el navegador

`history.forward()` → Lo mismo que hacer adelante en el navegador

`history.go(numero)` → Mueve hacia adelante o hacia atrás la cantidad de pasos que le digamos

`history.go(1)`

`history.go(-3)`

### Manipulando el historial


`history.pushState(state, title[, url])` → Nos permite agregar un elemento al historial. No cambia la página donde estamos.

```
const state = { 'page_id': 1, 'user_id': 5 }
const title = 'Página 1'
const url = '?page=1'

history.pushState(state, title, url)
```

Si quieren saber más pueden ver [ésta página de Mozilla](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador).