import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  const filePath = 'src/otraCosa/App.js'
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>Página principal</h1>
      </main>
      <footer>
        <Nav />
      </footer>
    </React.Fragment>
  );
}

export default App;
