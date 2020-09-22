# APIs

Son interfaces de contacto con las aplicaciones. Por lo general la información viaja en formato JSON. Existen APIs Publicas (de libre acceso), semi-públicas (requieren registrase / pagar por uso) y privadas (son internas de una determinada aplicación)

Cada URL donde podamos consultar información que provee la API se llama **endpoint**. Por lo general las APIs suelen tener una documentación que explica cómo utilizar cada uno de estos **endpoints**.

## Fetch

```
fetch('url')
    .then(response => {
        return response.json();
    })
    .then(data => {
        // hacemos lo que necesitemos hacer
    })
    .catch(error => {
        // hacemos algo con el error
    })
```

Para más información pueden ver [esta página](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch).

# Storage

Solo guarda strings, podemos usar formato JSON si necesitamos guardar estructuras como arrays y objetos.

# Local Storage

# Session Storage

`sessionStorage.setItem('clave', 'valor');`
`sessionStorage.getItem('clave');`
`sessionStorage.removeItem('clave');`
`sessionStorage.clear();`

```
localStorage.setItem(key, JSON.stringify({
	item1: "valor1",
	item2: "valor2"
}));
```