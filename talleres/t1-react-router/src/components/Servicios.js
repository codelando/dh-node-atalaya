import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const servicios = [
	{id: 1, nombre: 'Web'},
	{id: 2, nombre: 'Mobile'},
	{id: 3, nombre: 'Desktop'},
];

export default (props) => {
	const { texto } = props;

	const { params } = props.match;
	const id = Number(params.id);
	console.log(id);
	
	const queryString = new URLSearchParams(props.location.search);
	console.log(queryString.get('comida'));

	const elServicio = servicios.find(servicio => servicio.id === id);
	console.log(elServicio);

	return (
		<React.Fragment>
			<h2>Servicios</h2>
			<p>{texto}</p>
			<ul>
				<li><NavLink to="/servicios/1?comida=empanadas">Servicio 1</NavLink></li>
				<li><NavLink to="/servicios/2?comida=pizza">Servicio 2</NavLink></li>
				<li><NavLink to="/servicios/3?comida=asado">Servicio 3</NavLink></li>
				<li><NavLink to="/servicios/4">Servicio 4</NavLink></li>
			</ul>
			{ elServicio ? <h3> {elServicio.nombre} </h3> : <h3>Elegí un servicio</h3>}
			{ queryString.get('comida') ? <h4>Qué ganas de comer: {queryString.get('comida')}</h4> : null}
			{/* <Redirect to="/" /> */}
		</React.Fragment>
	)
}