# React

https://reactjs.org/ --> _A JavaScript library for building user interfaces_

https://es.reactjs.org/docs/getting-started.html --> Documentación en español.

React acelera el manejo de las vistas, teniendo una copia virtual del DOM y actualizándola según corresponda.

DOM <--> Virtual DOM

## Instalación

`npm init react-app mi-proyecto-de-react`

`npx create-react-app mi-proyecto-de-react`

`cd mi-proyecto-de-react`

`npm start`

## Estructura de archivos

- public
   - `index.html` --> root de la aplicación
- src
   - `index.js` --> importa el componente principal y renderiza la aplicación
   - `app.js` --> componente principal, escrito en JSX


## Ecosistema

Webpack --> Empaquetador

Babel --> Transpilador

## Componentes

### Creación

0. [Recomendado] Crear la carpeta de componentes `components`
1. Crear un archivo `NombreDelComponente.js`
2. Importar React `import React from 'react'`
3. Crear función con el mismo nombre del componente, que retorne JSX
```javascript
function NombreDelComponente() {
    return ({/* JSX aquí */})
}
```
4. Exportar la función `export default NombreDelComponente;`

### Implementación

1. Importar el componente `import NombreDelComponente from './NombreDelComponente.js'`
2. Escribir el componente donde lo necesitemos `<NombreDelComponente />`

**Ojo** Solo se puede retornar una etiqueta, si necesitamos más de una, tenemos que agruparlas. Para eso podemos usar [Fragmentos](https://es.reactjs.org/docs/fragments.html) `<React.Fragment></React.Fragment>`

## JSX

- Todas las etiquetas hay que cerrarlas, hasta `<img/>` `<br/>` y `<hr/>`
- `class` pasa a ser `className`
- La lógica de Javascript va entre llaves `{}`, esto se puede anidar.
- No se admiten comentarios de HTML `<!-- -->`, los comentarios se escriben así `{/* */}`
- Para iterar solo se puede usar `map`, `filter` y `reduce`