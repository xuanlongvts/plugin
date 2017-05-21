import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import schemaIndex from './schema/index';
import { Route, NavLink } from 'react-router-dom';

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
				
				<Route path={`${urlSub}/:topicId`} component={schemaIndex} />
				<Route exact path={urlSub} render={() => (
					<h4 className="lblChooseTopic">Please select a topic.</h4>
				)} />
			</div>
		)
	}
};

export default schemaClass;