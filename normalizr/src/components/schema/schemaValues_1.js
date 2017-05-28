import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

const data = {
	firstThing: {
		id: 1
	},
	secondThing: {
		id: 2
	}
};
const item = new schema.Entity('items');
const valuesSchema = new schema.Values(item);

const normalizeData = normalize(data, valuesSchema);

class schemaValues_1 extends Component{
	
	render(){
		{renderCommon('rawJon', data)}
		{renderCommon('editJson', normalizeData)}
		return(
			<div className="schema-array">

				<AreaBox />
			</div>
		)
	}
};

export default schemaValues_1;