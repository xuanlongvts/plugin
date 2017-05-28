import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import schemaValues_1 from './schemaValues_1';
import schemaValues_2 from './schemaValues_2';

class schemaClass extends Component{

	render(){
		const {match} = this.props;
		const urlSub = match.url;
		return(
			<div>
				<ul className="list-sublink-1">
					<li>
						<NavLink to={`${urlSub}/values1`} activeClassName="active">Values 1</NavLink>
					</li>
					<li>
						<NavLink to={`${urlSub}/values2`} activeClassName="active">Values 2</NavLink>
					</li>
				</ul>
				
				<Route path={`${urlSub}/values1`} component={schemaValues_1} />
				<Route path={`${urlSub}/values2`} component={schemaValues_2} />
			
			</div>
		)
	}
};

export default schemaClass;