import React, {Component} from 'react';
import {normalize, schema} from 'normalizr';
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

	commonRender(objEle, data){
		setTimeout(function(){
			document.getElementById(objEle).value = JSON.stringify(data, null, 4);
		}, 200);
	}


	render(){
		//console.log('normalizeData: ', this.changeData());
		{this.commonRender('rawJon', raw_data)}
		{this.commonRender('editJson', this.changeData())}
		return(
			<div>
				<h2>Quick start</h2>

				<div style={styles.eachBox}>
					<h4>Raw data: </h4>
					<textarea id="rawJon" style={styles.txtArea} disabled>
					</textarea>
				</div>
				<div style={styles.eachBox}>
					<h4>Update data: </h4>
					<textarea id="editJson" style={styles.txtArea} disabled>
					</textarea>
				</div>
			</div>
		)
	}
}

const styles = {
	txtArea: {
		width: '600px',
        padding: '4px 7px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: '#fff',
        color: '#333',
        marginBottom: '7px',
        height: '500px',
        resize: 'none',
	},
	eachBox: {
		marginRight: '10px',
		display: 'inline-block',
		width: '620px'
	}
}

export default quickstart;