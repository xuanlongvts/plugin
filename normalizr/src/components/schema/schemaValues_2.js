import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

const data = {
	'1': {
		id: 1,
		type: 'admin'
	},
	'2': {
		id: 2,
		type: 'user'
	}
};
const userSchema =  new schema.Entity('users');
const adminSchema = new schema.Entity('admins');

const valuesSchema = new schema.Values({
	admins: adminSchema,
	users: userSchema
}, (input, parent, key) => `${input.type}s`)

const normalizeData = normalize(data, valuesSchema);

class schemaValues_2 extends Component{
	
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

export default schemaValues_2;