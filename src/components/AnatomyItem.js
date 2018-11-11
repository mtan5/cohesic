import React from "react";

const AnatomyItem = props =>{
	if(props.item == 0){
		return <div>No Item to display</div>
	}

	return(
		<div>
		<input 
			type="checkbox" 
			value={props.item.id}
			checked={props.item.check_state}
			onChange={props.onCheckEvent}/> {props.item.label}</div>
	);
};

export default AnatomyItem;