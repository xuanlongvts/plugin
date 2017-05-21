import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
import renderCommon from '../common/renderCommon';
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
}

export default quickstart;