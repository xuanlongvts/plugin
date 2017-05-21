import React, {Component} from 'react';
import {renderCommon, AreaBox} from '../../common/renderCommon';
import {Route} from 'react-router-dom';
import array from './schemaArray';
import entity from './schemaEntity';
// import schemaObject from './schemaObject';
// import schemaUnion from './schemaUnion';
// import schemaValues from './schemaValues';

class schemaIndex extends Component {

	render(){
		const {match} = this.props;
		// const urlParams = match.url
		const getParams = match.params.topicId;
		console.log(getParams);

		return(
			<div>
				<Route component={array} />
				<Route component={entity} />
				<AreaBox />
			</div>
		)
	}
}

export default schemaIndex;