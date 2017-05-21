import React from 'react';
import ReactDOM from 'react-dom';
import Normalize from './components/normalize';
import Denormalize from './components/denormalize';
import Schema from './components/schema';
import Home from './components/home';
import "./index.css";
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<ul className="nav-list">
				<li><Link to="/normalize">Normalize</Link></li>
				<li><Link to="/denormalize">Denormalize</Link></li>
				<li><Link to="/schema">Schema</Link></li>
			</ul>

			<hr/>

			<Route exact path="/"  component={Home} />
			<Route path="/normalize" component={Normalize} />
			<Route path="/denormalize" component={Denormalize} />
			<Route path="/schema" component={Schema} />
		</div>
	</Router>,
	document.getElementById('root')
);
