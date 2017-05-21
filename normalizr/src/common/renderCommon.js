import React from 'react';

export const renderCommon = (objEle, data) => {
	setTimeout(function(){
		document.getElementById(objEle).value = JSON.stringify(data, null, 4);
	}, 10);
}

export const AreaBox = () => (
	<div className="listBox">
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