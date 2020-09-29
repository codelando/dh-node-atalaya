# APIs

Las APIs que vamos a ver utilizan el estándar REST
- Las rutas serán las mismas que usamos para los controladores actuales
- No podemos guardar estado de las peticiones, aunque sí es válido usar cookies ;-)
- Los pedidos deberían poder cachearse

## Proceso

1. Identifiación de objetos (colecciones/recursos)
2. Creación de URLs
/recurso
/recurso/{id}
/recurso/{id}/subrecurso
3. Diseño de la información
```
{
    meta: {
        status: 200,
        message: 'Ok',
        count: '10'
    },
    data: [
        {...},
        {...}
    ] 
}
```
4. Asociar métodos

## Pasos

- Crear las rutas de los endpoint
- Crear las acciones de los controladores
- Agregar el router de los endpoint al app.js
- Consumir la API
    - Hacer llamado con fetch / axios
    - Mostrar la info con JS de Front

## Pediente 

Ver cache, max-age y método HEAD
Ver status codes de los requests
- 200
- 204 no content
- 404 not found

## Links útiles
https://softwareengineering.stackexchange.com/questions/141019/should-cookies-be-used-in-a-restful-api