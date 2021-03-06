import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

const data = {
	owner: {
		id: 1,
		type: 'user',
		name: 'Anne'
	}
};
const user = new schema.Entity('users');
const group = new schema.Entity('groups');
const unionSchema = new schema.Union({
	user: user,
	group: group
}, 'type');

const normalizeData = normalize(data, {owner: unionSchema});

class schemaUnion extends Component{
	
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

export default schemaUnion;