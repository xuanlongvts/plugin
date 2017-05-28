import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

const data = [
	{
		id: '1',
		guest_id: null,
		name: 'Esther'
	},
	{
		id: '1',
		guest_id: '22',
		name: 'Tom'
	}
];
const patronsSchema = new schema.Entity('patrons', undefined, {
	idAttribute: value => value.guest_id ? `${value.id}-${value.guest_id}` : value.id,
});

const normalizeData = normalize(data, [patronsSchema]);

class schemaEntity_2 extends Component{
	
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

export default schemaEntity_2;