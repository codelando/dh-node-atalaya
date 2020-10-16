import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

// Assets
import './assets/css/bootstrap.min.css';

// Components
import Home from './components/Home';
import Servicios from './components/Servicios';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import NotFound from './components/NotFound';

function App() {
	return (
		<div className="container">
			<h2 className="text-center p-3 text-danger">
				<span role="img" aria-label="bandera de rusia">🇷🇺</span> 
				Hello React Router
				<span role="img" aria-label="bandera de rusia">🇷🇺</span> 
			</h2>

			<nav>
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<NavLink className="nav-link" exact to="/">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/servicios">Servicios</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/productos">Productos</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/contacto">Contacto</NavLink>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route path="/servicios/:id?" component={ props => <Servicios texto="Hola qué tal" {...props} />}/>
				<Route path="/productos" component={Productos}/>
				<Route path="/contacto" component={Contacto}/>
				<Route exact path="/" component={ () => <Home texto="Saludos" /> }/>
				<Route component={NotFound} />
			</Switch>
		</div>
	)
}

export default App;
