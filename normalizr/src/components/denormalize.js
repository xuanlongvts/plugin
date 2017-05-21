import React, {Component} from 'react';
import {denormalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../common/renderCommon';

const user = new schema.Entity('users');
const mySchema = {users: [user]};
const entities = {
	users: {		
		'5a': {
			id: 1
		},
		'7b': {
			id: 2
		}		
	}
}
const denormalizedData = denormalize(
	{
		users: ['5a', '7b']
	},
	mySchema,
	entities
);

class denormalizeClass extends Component{

	render(){
		{renderCommon('rawJon', entities)}
		{renderCommon('editJson', denormalizedData)}
		return(
			<div>
				<h2>Denormalize</h2>

				<AreaBox />
			</div>
		)
	}
};

export default denormalizeClass;