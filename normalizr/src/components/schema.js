import React, {Component} from 'react';
import { Route, NavLink } from 'react-router-dom';
import schemaArray from './schema/schemaArray';
import schemaEntity from './schema/schemaEntity';
import schemaObject from './schema/schemaObject';
import schemaUnion from './schema/schemaUnion';
import schemaValues from './schema/schemaValues';

class schemaClass extends Component{

	render(){
		const {match} = this.props;
		const urlSub = match.url;
		return(
			<div>
				<h2>Schema</h2>
				<ul className="list-sublink">
					<li>
						<NavLink to={`${urlSub}/array`} activeClassName="active">Array</NavLink>
					</li>
					<li>
						<NavLink to={`${urlSub}/entity`} activeClassName="active">Entity</NavLink>
					</li>
					<li>
						<NavLink to={`${urlSub}/object`} activeClassName="active">Object</NavLink>
					</li>
					<li>
						<NavLink to={`${urlSub}/union`} activeClassName="active">Union</NavLink>
					</li>
					<li>
						<NavLink to={`${urlSub}/values`} activeClassName="active">Values</NavLink>
					</li>
				</ul>
				
				<Route path={`${urlSub}/array`} component={schemaArray} />
				<Route path={`${urlSub}/entity`} component={schemaEntity} />
				<Route path={`${urlSub}/object`} component={schemaObject} />
				<Route path={`${urlSub}/union`} component={schemaUnion} />
				<Route path={`${urlSub}/values`} component={schemaValues} />
				<Route exact path={urlSub} render={() => (
					<h4 className="lblChooseTopic">Please select a topic.</h4>
				)} />
			</div>
		)
	}
};

export default schemaClass;