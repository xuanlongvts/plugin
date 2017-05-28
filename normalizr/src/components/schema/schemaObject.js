import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

const data = {
	users: [
		{
			id: '123',
			name: 'Beth'
		}
	]
};

const user = new schema.Entity('users');
const responseSchema = new schema.Object({
	users: new schema.Array(user)
});

// const responseSchema = { users: new schema.Array(user)}
const normalizeData = normalize(data, responseSchema);

class schemaObject extends Component{
	
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

export default schemaObject;