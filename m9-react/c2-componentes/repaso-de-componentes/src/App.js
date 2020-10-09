import React from 'react';
import Nav from './components/nav/Nav';
import './App.css';

function App() {
  const menuItems = ['productos', 'servicios', 'contacto'];

  return (
    <React.Fragment>
      <header>
        <Nav items={menuItems}>
          <a href="/">Home</a>
        </Nav>
      </header>
      <main>
        <h1>Un titular</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nam dolor, eius odio est labore ducimus molestias consequuntur expedita repellat explicabo sint perspiciatis cum, consequatur et in laudantium ipsam doloremque.</p>
      </main>
      <footer>
        <Nav items={menuItems}>
          <a href="/">Home</a>
        </Nav>
      </footer>
    </React.Fragment>
  );
}

export default App;