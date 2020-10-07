# React

## Props

Las props o propiedades nos permiten pasarle información al componente al momento de montarlo o renderizarlo.

Para implementarlas debemos:

1. Agregarla como parámetro de la función al momento de crear el componente

```jsx
    function Heading(props) {
        return (
            <React.Fragment>
                <h1>{ props.title }</h1>
                <h2>{ props.subtitle }</h2>
            </React.Fragment>
        );
    }
```

2. Pasar las props al momento de usar el componente

```jsx
    <Heading title="Un título para el componente" subtitle="Un subtítulo para el componente" />
```

## Map

Para los casos donde el contenido de la prop es un array, vamos a necesitar una manera de iteralo. Esa manera por lo general es `map()`.

En este caso el componente podría recibir un array con cualquier estructura de datos que podamos necesitar. Para una barra de enlaces podría ser de la siguiente manera:

```jsx
    <Nav items={ [
        {text: 'Home', link: '/'}, 
        {text: 'Nosotros', link: '/nosotros'}, 
        {text: 'Contacto', link: '/contacto'}
    ] } />
```

Luego a la hora de iterar usaremos map sobre esa propiedad.

Es importante recordar que React nos va a pedir una key para poder identificar los elementos de manera sencilla. Para generarlo podemos utilizar el index que nos provee el método `map()` o el ID en caso de que se trate de un registro de la base de datos.

Pueden leer más sobre esto [aquí](https://es.reactjs.org/docs/lists-and-keys.html).

```jsx
    function Nav(props) {
        return (
            <nav>
                <ul>
                    { props.items.map((item, index) => <li key={ index + '-' + item }><a href="{ item.link }">) }
                </ul>
            </nav>
        );
    }
```

## Prop types

Nos permiten indicar el tipo de dato que se espera recibir para esa propiedad. En caso de no cumplirse simplemente veremos un warning en la consola. No habrá un error que detenga la aplicación.

`npm i prop-types`


```jsx
    import React from 'react';
    import propTypes from 'prop-types'

    function Nav(props) {
        return (
            <nav>
                <ul>
                    { props.items.map((item, index) => <li key={ index + '-' + item }><a href="{ item.link }">{ item.title }</a>) }
                </ul>
            </nav>
        );
    }

    Nav.propTypes = {
        items: PropTypes.shape({
            title: PropTypes.string,
            link: PropTypes.string
        });
    };
```

## Default props

React también nos permite definir valores por defecto para las propiedades, lo hacemos con las `defaultProps`. Estos serán los valores que se asignen en caso de que no llegue la propiedad.

```jsx
    function List(props) {
        return (
            <ul>
                { props.items.map((item, index) => <li key={ index + '-' + item }><a href="{ item.link }">{ item.title }</a>) }
            </ul>
        );
    }

    List.defaultProps = {
        title: "Item sin título",
    };
```

## Children

Los componentes de React, así como los elementos de HTMLs pueden tener hijos. Para el caso de React, en caso de que existan hijos, va a ser necesario que le digamos al componente dónde debe incluirlos.

```jsx
    function Ad(props) {
        return (
            <div>
                <p>Inicio ----</p>
                { props.children }
                <p>Fin ----</p>
            </div>
        );
    }
```

```jsx
    <Ad>
        {/* Contenido del aviso aquí */}
    </Ad>
``` 

## Styling

La manera de estilar componentes dentro de React no es más que tener la hoja de estilos del lado del source e importarla para poder utilizarla.

Algunos consejos:
1. La hoja de estilo debería llamarse como el componente --> ejemplo: `Nav.css`
2. La clase del elemento HTML debería ser el nombre del componente `class="Nav"`
3. Los estilos deberían aplicarse todos a esa clase `Nav li { color: tomato}`