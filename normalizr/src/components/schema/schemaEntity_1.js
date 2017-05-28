import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../../common/renderCommon';

// const data = {
// 	id_str: "123",
// 	url: "https://twitter.com",
// 	user: {
// 		id_str: "456",
// 		name: "Jimmy"
// 	}
// };
// const user = new schema.Entity('users', {}, {
// 	idAttribute: 'id_str'
// });
// const tweet = new schema.Entity('tweets', {user: user}, {
// 	idAttribute: 'id_str',
// 	mergeStrategy: (entityA, entityB) => ({
// 		...entityA,
// 		...entityB,
// 		favorites: entityA.favorites
// 	}),
// 	processStrategy: (entity) => omit(entity, 'url')
// });
// const normalizeData = normalize(data, tweet);

class schemaEntity_1 extends Component{
	
	render(){
		// {renderCommon('rawJon', data)}
		// {renderCommon('editJson', normalizeData)}

		return(
			<div className="schema-array">

				<h4>Entity 1</h4>
			</div>
		)
	}
};

export default schemaEntity_1;