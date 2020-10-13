# Stateful components o components con estado

## Transformando un componente sin estado en uno con estado

Un componente con estado va diferir en lo siguiente de un componente sin estado:

1. Necesitamos requerir el objeto Component al momento de importar React.

`import React, { Component } from 'react';`

2. Usaremos una clase de Javascript en lugar de una función

```jsx
class MiComponente extends Component {
    return ( {/*jsx aquí */})
}
```

3. Envolveremos nuestro return en una función render

```jsx
class MiComponente extends Component {
    render() {
        return ( {/*jsx aquí */})
    }
}
```

## Manejando los estados

Además del ya conocido props, que maneja las propiedades del componente, vamos a estar agregando ahora el estado o `state`.

Como ahora estamos dentro del contexto de una clase de Javascript, vamos a tener que manejarnos levemente diferente a como lo hacíamos dentro de la función.

1. El método constructor. 

Las clases son como pequeñas fábricas, que fabricarán objetos según el molde que definamos. A la hora de construir una instancia (el objeto en sí), el método constructor definirá los parámetros de esa instancia.

Como en este caso estamos extendiendo de otra clase, el método `super()`, se encargará de pasarle los datos necesarios a esa clase para que todo vaya bien.

```jsx
class MiComponente extends Component {
    constructor() {
        super();
    }
    render() {
        return ( {/*jsx aquí */})
    }
}
```

2. El uso de `this`

Nuevamente por estar dentro del contexto de una clase, y sabiendo que esa clase será instanciada (creada a partir del molde), siempre que queramos referirnos a una propiedad o método de esa instancia lo haremos con `this.propiedad` o `this.metodo()`

```jsx
class MiComponente extends Component {
    constructor() {
        super();
        this.state = {
            propiedad: 'unValor',
            metodo() { /* Alguna acción */ }
        }
    }
    render() {
        return ( <h1>{ this.state.propiedad }</h1>)
    }
}
```

3. Modificando el estado del componente

Para modificar cualquiera de las propiedades del estado, React nos da la función `setState()`, que recibirá un objeto literal con la propiedad y el nuevo valor. React se encargará de fusionar es cambio con el resto de la información que haya en el estado.

Para que React funcione correctamente, no debemos actualizar el estado directamente: `this.state.propiedad = valor`, siempre debe ser a través de `setState()`.

```jsx
class MiComponente extends Component {
    constructor() {
        super();
        this.state = {
            propiedad: 'unValor',
            metodo() { /* Alguna acción */ }
        }
    }

    actualizarPropiedad() {
        this.setState({
            propiedad: 'nuevoValor'
        });
    }

    render() {
        return ( <h1>{ this.state.propiedad }</h1>)
    }
}
```

4. Los eventos del componente

Así como HTML nos provee la posibilidad de escribir eventos en los elementos, JSX nos deja hacer exáctamente lo mismo.

Los eventos en JSX se escriben en el mismo componente como una propiedad del elemento y con el formato camelCase `onClick`, `onMouseOver`, etc.

Al igual que los métodos del DOM de Javascript, los métodos de JSX recibirán un callback, que se ejecutará cuando se dispare dicho evento.

```jsx
class MiComponente extends Component {
    constructor() {
        super();
        this.state = {
            propiedad: 'unValor',
            metodo() { /* Alguna acción */ }
        }
    }

    actualizarPropiedad() {
        this.setState({
            propiedad: 'nuevoValor'
        });
    }

    render() {
        return ( 
            <div>
                <h1>{ this.state.propiedad }</h1>
                <button onClick={ () => this.actualizarPropiedad() }>
            </div>
        )
    }
}
```

Cada vez que cambiemos el estado de un componente, este se volverá a renderizar.

5. Trabajando con props

Cuando vimos los componentes funcionales, podíamos pasarle las props directamente como parámetro a nuestra función.

```jsx
function MiComponente(props) {
    return (
        {/* acá podemos acceder a props */}
    )
}
```

Cuando trabajamos con clases la cosa cambia un poco, quien recibe ahora las props será el método constructor. Este a su vez, le pasará las props al componente que estamos extendiendo mediante la función `super()` que también recibirá las props: `super(props)`.

Finalmente podemos usar las props para setear el estado del componente con la propiedad `this.state`


```jsx
class MiComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propiedad: props.unaProp, // tomamos el valor que viene de las props
            metodo() { /* Alguna acción */ }
        }
    }

    render() {
        return ( 
            <div>
                <h1>{ this.state.propiedad }</h1>
            </div>
        )
    }
}
```

## El ciclo de vida

### El Montaje

Ocurre una sola vez y es el proceso por el cual el componente se prepara y luego se dibuja en el navegador.

Todo lo que queramos que ocurra cuando el componente esté listo, debe ir en esta función:

`componentDidMount() { }`

### La actualización 

Sucede cada vez que el estado del componente se actualiza.

Todo lo que queramos que ocurra cuando el componente cambie su estado debe ir en esta función:

`componentDidUpdate() { }`

### El desmontaje

Sucede cuando quitamos el componente de la vista.

Todo lo que queramos que ocurra al momento de desmontarlo debe ir en esta función:

`componentWillUnmount() { }`

## Consumo de APIs y los componentes




## Material extra

Si quieren ver un recorrido alternativo, pueden mirar la [documentación oficial](https://es.reactjs.org/docs/state-and-lifecycle.html) que una buena guía de cómo crear un componente de estado.