import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import schemaEntity_1 from './schemaEntity_1';
import schemaEntity_2 from './schemaEntity_2';

class schemaEntity extends Component{

	render(){
		const {match} = this.props;
		const urlSub = match.url;
		return(
			<div>
				<ul className="list-sublink-1">
					<li>
						<NavLink to={`${urlSub}/entity1`} activeClassName="active">Entity 1</NavLink>
					</li>
					<li>
						<NavLink to={`${urlSub}/entity2`} activeClassName="active">Entity 2</NavLink>
					</li>
				</ul>
				
				<Route path={`${urlSub}/entity1`} component={schemaEntity_1} />
				<Route path={`${urlSub}/entity2`} component={schemaEntity_2} />
			
			</div>
		)
	}
};

export default schemaEntity;