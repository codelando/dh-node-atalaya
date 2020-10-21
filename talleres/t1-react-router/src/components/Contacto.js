import React, { Component } from 'react';

class Contacto extends Component {
	componentDidMount () {
		console.log('Se montó el Contacto');
	}
	
	componentWillUnmount () {
		console.log('Se DESMONTÓ el Contacto');
	}

	render () {
		return (
			<h2>Contacto</h2>
		)
	}
}

export default Contacto;