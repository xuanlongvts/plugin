import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

const data = [
	{
		id: '123',
		name: 'Jim'
	},
	{
		id: '456',
		name: 'Jane'
	}
];
const userSchema = new schema.Entity('users');
const userListSchema = new schema.Array(userSchema);

const normalizeData = normalize(data, userListSchema);

class schemaArray1 extends Component{
	
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

export default schemaArray1;