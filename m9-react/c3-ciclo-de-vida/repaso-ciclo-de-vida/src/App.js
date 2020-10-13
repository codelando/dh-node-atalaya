import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Sin título"
    };
  }

  componentDidMount() {
    console.log('Me monté');
    setTimeout(() => {
      this.setState({
        title: "Mi aplicación de React"
      })
    }, 3000
    )
  }

  componentDidUpdate() {
    console.log('Me actualizé');
  }

  actualizarTitulo(text) {
    this.setState({
      title: text
    })
  }

  render() {
    console.log('Me renderizé');
    return (
      <h1 
        onMouseOver={ () => this.actualizarTitulo('Estás haciendo hover') } 
        onMouseOut={ () => this.actualizarTitulo('Mi aplicación de React') } >
          { this.state.title }
      </h1>
    );
  }
}

export default App;
