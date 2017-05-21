import React, {Component} from 'react';
import {denormalize, schema} from 'normalizr';
import {renderCommon} from '../common/renderCommon';

const user = new schema.Entity('nongNo');
const mySchema = {users: [user]};
const entities = {
	users: {		
		'1': {
			id: 1
		},
		'2': {
			id: 2
		}		
	}
}
const denormalizedData = denormalize(
	{
		users: [1, 2]
	},
	mySchema,
	entities
);

class denormalizeClass extends Component{

	render(){
		//console.log('denormalizedData: ', denormalizedData);
		return(
			<div>
				<h2>Normalize</h2>

				<div className="eachBox">
					<h4>Raw data: </h4>
					<textarea id="rawJon" disabled>
					</textarea>
				</div>
				<div className="eachBox">
					<h4>Update data: </h4>
					<textarea id="editJson" disabled>
					</textarea>
				</div>
			</div>
		)
	}
};

export default denormalizeClass;