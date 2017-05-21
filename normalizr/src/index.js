import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Normalize from './components/normalize';
import Denormalize from './components/denormalize';
import Schema from './components/schema';
import Quickstart from './components/quickstart';
import "./index.css";
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<ul className="nav-list">
				<li><NavLink to="/quickstart" activeClassName="active">Quickstart</NavLink></li>
				<li><NavLink to="/normalize" activeClassName="active">Normalize</NavLink></li>
				<li><NavLink to="/denormalize" activeClassName="active">Denormalize</NavLink></li>
				<li><NavLink to="/schema" activeClassName="active">Schema</NavLink></li>
			</ul>

			<hr/>

			<Route exact path="/"  component={Home} />
			<Route path="/quickstart" component={Quickstart} />
			<Route path="/normalize" component={Normalize} />
			<Route path="/denormalize" component={Denormalize} />
			<Route path="/schema" component={Schema} />
		</div>
	</Router>,
	document.getElementById('root')
);
