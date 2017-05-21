import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import {renderCommon, AreaBox} from '../common/renderCommon';
import raw_data from '../api/json_raw';

class quickstart extends Component {

	changeData(){
		const user = new schema.Entity('user');

		const comment = new schema.Entity('comments', {
			commenter: user
		});

		const arrticle = new schema.Entity('arrticle', {
			author: user,
			comments: [comment]
		});

		const normalizeData = normalize(raw_data, arrticle);

		return normalizeData;
	}

	render(){
		{renderCommon('rawJon', raw_data)}
		{renderCommon('editJson', this.changeData())}
		return(
			<div>
				<h2>Quick start</h2>

				<AreaBox />
			</div>
		)
	}
}

export default quickstart;