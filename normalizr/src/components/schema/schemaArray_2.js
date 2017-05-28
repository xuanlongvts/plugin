import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

const data = [
	{
		id: 123,
		type: 'admin'
	},
	{
		id: 456,
		type: 'user'
	}
];
const userSchema = new schema.Entity('users');
const adminSchema = new schema.Entity('admins');
const myArray = new schema.Array({
	admins: adminSchema,
	users: userSchema
}, (input, parent, key) => `${input.type}s` );

const normalizeData = normalize(data, myArray);

class schemaArray2 extends Component{
	
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

export default schemaArray2;