## Vinculación

Javascript en linea 
`<script></script>`

En archivo vinculado
`<script src="mi-archivo.js"></script>`

En el archivo no va la etiqueta script.

Cliente y servidor. Front es el navegador, el cliente.

Todo lo que hagamos es del lado del cliente, no son cambios permanentes.

## DOM - Document Object Model

### window

Hace referencia a la ventana / pestaña del navegador

window.location

window.innerHeight

### document

Hace referencia al documento HTML


### selectores

Aceptan cualquier regla de CSS

document.querySelector()
document.querySelectorAll()

querySelectorAll devuelve una lista de nodos, que a fines prácticos es casi como un array.

Aceptan solo IDs

document.getElementById()


### Modificando elementos

Soporta elementos de HTML.

`elemento.innerHTML = "El nuevo contenido"`

No soporta HTML, solo texto.

`elemento.innerTEXT = "El nuevo contenido"`

`elemento.style.propiedad = "valor"`

| CSS | JS |
| --- | --- |
| kebab-case | camelCase |
| background-color | backgroundColor |

### Modificado clases



`elemento.classList.add()`
`elemento.classList.remove()`
`elemento.classList.contains()`
`elemento.classList.toggle()`

