import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon} from '../common/renderCommon';

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

export default normalizeClass;