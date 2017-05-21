import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../common/renderCommon';

const myData = {
	users: [
		{
			id: 3
		},
		{
			id: 7
		}
	]
}
const user = new schema.Entity('nongNo');
const mySchema = {users: [user]};
const normalizedData = normalize(myData, mySchema);

class normalizeClass extends Component{

	render(){

		{renderCommon('rawJon', myData)}
		{renderCommon('editJson', normalizedData)}
		return(
			<div>
				<h2>Normalize</h2>

				<AreaBox />
			</div>
		)
	}
};

export default normalizeClass;