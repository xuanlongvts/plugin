const renderCommon = (objEle, data) => {
	setTimeout(function(){
		document.getElementById(objEle).value = JSON.stringify(data, null, 4);
	}, 10);
}

export default renderCommon;