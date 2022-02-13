# React Router

## Intro

React no es un Framework, es una Librería para trabajar las vistas en el front.

Por esta razón es que no tenemos por defecto un sistema de ruteo como si lo tiene Node.

React Router viene a solucionar justamente esto, permitiéndonos construir lo que normalmente se conoce como una SPA (Single Page Application).

Pueden ver la [documentación oficial](https://reactrouter.com/web/guides/quick-start) para más detalle.

## Instalación e implementación

React Router es un paquete como cualquier otro, para instalarlo seguimos el procedimiento habitual. Claramente para utilizarlo previamente deberíamos una aplicación de React creada y funcionando (`npm init react-app nombre-de-mi-proyecto`).

`npm install react-router-dom`


Una vez instalado el paquete, en nuestro `index.js` deberemos importar el módulo y englobar nuestro componente princial `<App />` dentro del componente que nos provee React Router: `<BrowserRouter>` .

```jsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

## Los compomentes de React Router

Además del `<BrowserRouter>`, React Router nos da un par de componentes adicionales para trabajar los enlaces y las decisiones de ruteo.

### Link

Link nos permite generar un enlace a una ruta de React. Su estructura es similar a la de un anchor o etiqueta `<a href="una-direccion"></a>` con la diferencia que en lugar de usar `a` usaremos `to` y en lugar de `href` usamos `to`.

`<Link to="/">Home</Link>`

Veamos el código completo, importando el componente e implementándolo:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
```

### NavLink

El NavLink es casi idéntico al **Link** que ya vimos, la diferencia es que tendrá en cuenta la dirección donde se encuenta el usuario y en caso de coincidir con la propiedad `to`, agregará la clase de CSS `active` al componente.

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
```

Navlink va a buscar coincidencias de manera parcial, eso quiere decir que si estamos en la página de about `/about` el NavLink de la home `/` también se va a marcar como activo. Para evitar esto podemos usar la propiedad `exact` para decirle que el NavLink solo se debe marcar como activo si la coincidencia es exacta.

```jsx
<li><NavLink exact to="/">Home</NavLink></li>

```

NavLink también nos permite cambiar la clase por defecto por otra de nuestra preferencia con la propiedad `activeClassName`.

```jsx
<li><NavLink activeClassName="otra-clase" to="/about">About</NavLink></li>

```

### Route

Route será el componente que nos perminitirá hacer la lógica de ruteo. Recibirá dos propiedades:

- El `path` al que deberá responder. Recibirá el mismo valor que tiene la propiedad `to` del **Link** correspondiente.
- El `component` que deberá renderizar.

`<Route path="/about" component={ About } />`

React Router se encargará de hacer una **comparación parcial** entre el **path** donde se encuentra el usuario contra las posibles rutas y **dibujará todos los componentes que coincidan**. Esto quiere decir que si parte de la ruta concuerda con el path, se dibujará el componente.

Por ejemplo, si la ruta actual fuera `/users` pasaría lo siguiente con estos componentes:

`<Route path="/" component={ Home } />` --> No hay coincidencia

`<Route path="/users" component={ UserList } />` --> Coincidencia exacta, se renderiza

`<Route path="/users/login" component={ UserLogin } />` --> Coincidencia parcial, se renderiza

`<Route path="/users/register" component={ UserRegister } />` --> Coincidencia parcial, se renderiza

`<Route path="/contact" component={ Contact } />` --> No hay coincidencia

En el caso de necesitar que la compararción sea exacta, agregamos la propiedad `exact`.

`<Route exact path="/" component={ Home } />`

### Renderizando con props

En caso de que necesitemos pasarle propiedades al componente que vamos a renderizar para la ruta, podemos usar los children para hacerlo. Para eso, abrimos y cerramos la etiqueta del componente y dentro de él, podemos el o los componentes que queramos renderizar para esa ruta.

```jsx
<Route path="/">
    <Home title="Página principal">
</Route >
```

### Rutas dinámicas

Route nos permite también atajar rutas dinámicas (como cuando nos llega un ID por ejemplo), utilizando los mismos comodines que vimos en Node, los dos puntos seguidos del nombre que queremos darle al parámetro de la ruta.

```jsx
<Route path="/product/:id" component={ ProductDetail } />`
```

Estos parámetros de la ruta, estarán luego disponibles como props dentro de cualquiera de los compomentes que se hayan renderizado dentro de esa ruta. Para acceder a ellos lo podrémos hacer a través de `props.match.params.nombre-del-parametro`.

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Product = (props) =>
    return (
        <div>
            <h3>ID del producto: { props.match.params.id }</h3>
        </div>
    )
}

export default Product;
```

### Atajando las rutas sin match

Para atajar todas las rutas que no existan (el famoso 404 🤷‍♂️), el componente **Route** nos permite no poner la propiedad path y para que esa ruta ataje todas aquellas direcciones que no tengan un componente relacionado.

`<Route component={ NotFound } />`

Como las rutas se leen y se machean en el orden en que se escriben, **esta ruta deberá ir siempre a lo último**.

### Switch

Hace un rato hablamos de que `<Route />` por defecto **va a renderizar todos los componentes** que conincidan con la ruta actual. Por el contrario `<Switch />` **solo renderizará los componentes de la primera coincidencia** que ocurra con la ruta actual.

```jsx
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () =>
    return (
          <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <NoMatch />
            </Route>
        </Switch>
    )
}

export default Navbar;
```

Al igual que en Node, es mejor poner las rutas más generales abajo ('/' por ejemplo) y las más específicas arriba, ya que se iran probando en el orden en el que están.

### Switch y las rutas anidadas

Las reglas de ruteo pueden anidarse, esto quiere decir que si dentro de nuestra página de about, tenemos subpáginas, las podemos trabajar con un nuevo `<Switch />` 

Por lo general cuando implementemos rutas anidadas, tendremos que utilizar el `exact` en las rutas de más arriba.

### Redirect

Por ultimo, puede llegar el caso de que queramos hacer una redirección a otra ruta de nuestra aplicación. Para esos casos podemos utililizar el componente `<Redirect>`. Al igual que los enlaces, recibirá la propiedad `to` para indicar a dónde debemos dirigir al usuario.

```jsx
<Redirect to="/">
```

Este componente normalmente lo veremos dentro de una lógica `if ... else` donde si ocurre lo que esperábamos mostramos el componente correspondiente, el detalle de un producto por ejemplo, y de lo contrario, redirigimos al usuario a otra parte.