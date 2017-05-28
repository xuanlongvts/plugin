import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import schemaArray_1 from './schemaArray_1';
import schemaArray_2 from './schemaArray_2';

class schemaClass extends Component{

	render(){
		const {match} = this.props;
		const urlSub = match.url;
		return(
			<div>
				<ul className="list-sublink-1">
					<li>
						<NavLink to={`${urlSub}/array1`} activeClassName="active">Array 1</NavLink>
					</li>
					<li>
						<NavLink to={`${urlSub}/array2`} activeClassName="active">Array 2</NavLink>
					</li>
				</ul>
				
				<Route path={`${urlSub}/array1`} component={schemaArray_1} />
				<Route path={`${urlSub}/array2`} component={schemaArray_2} />
			
			</div>
		)
	}
};

export default schemaClass;