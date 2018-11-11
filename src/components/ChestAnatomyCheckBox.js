import React from "react";
import { Component } from "react";
import ChestAnatomyItems from "./ChestAnatomyItems.js";
import AnatomyItem from "./AnatomyItem.js";

class ChestAnatomyCheckBox extends Component{
	constructor(props){
		super(props);
		this.state = {ChestAnatomyItems:ChestAnatomyItems}
	}

	//process check box on-check event
	//parameter: check box input type
	processCheckEvent(e){
		const id = e.target.value;
		const checkStatus = e.target.checked;
		const checkBoxItems = this.state.ChestAnatomyItems;
		var reference = id;				
		var refLength = id.length;

		this.checkParentAnatomyItem(id, checkBoxItems,checkStatus);
		if(id=="1") {this.tickAllCheckBox(checkStatus, checkBoxItems);}		
				
		if(id!="1"){
			if(checkStatus==true){
				//parent
				while(refLength >= 0){ 								
					reference = id.substring(0, reference.length-2);
					this.checkParentAnatomyItem(reference, checkBoxItems, checkStatus);
					refLength = refLength - 2;				
				}				
			}
			else{
				//child					
				this.uncheckChildAnatomyItem(id, checkBoxItems, checkStatus);
			}		
		}		
	}

	//set checked status to a group of (parent) checkbox
	//parameters : checkbox id | checkbox items (state) | check box checked status
	checkParentAnatomyItem(id="", checkBoxItems, checkCurrentStatus){
		checkBoxItems.map(item => {
			if(item.id == id){
				//console.log(item.id + "|" + item.check_state + "=" + checkCurrentStatus);		
				item.check_state=checkCurrentStatus;	
			}
			else{			
				this.checkParentAnatomyItem(id, item.sub_items, checkCurrentStatus);
			}			
		});
		this.setState({ChestAnatomyItems: checkBoxItems});
	}

	//set checked status to a group of (child) checkbox
	//parameters : checkbox id | checkbox items (state) | check box checked status
	uncheckChildAnatomyItem(id="", checkBoxItems, checkCurrentStatus){
		checkBoxItems.map(item => {
			if(item.id == id){
				this.tickAllCheckBox(checkCurrentStatus, item.sub_items);//child
			}
			else{			
				this.uncheckChildAnatomyItem(id, item.sub_items, checkCurrentStatus);
			}		
		});
		this.setState({ChestAnatomyItems: checkBoxItems});
	}	

	//check - uncheck a group of check box in the HTML form
	//parameters - checkbox checked status | checkbox items (state)
	tickAllCheckBox(state=false, checkBoxItems){
		checkBoxItems.map(item => {
			item.check_state=state;
			this.tickAllCheckBox(state, item.sub_items);
		});
		this.setState({ChestAnatomyItems: checkBoxItems});
	}

	//generate an html list (<ul></ul>) sub items of checkboxes
	//parameter | array of check box items
	generateSubItemCheckbox(sub_items = []){
		return(
				<ul className="list-group">
					{this.generateCheckBox(sub_items)}
				</ul>
			);		
	}

	//generates a group of  html checkbox (<li></li>)
	//parameter | array of check box items
	generateCheckBox(checkbox_items = []){
		//console.log("List:" + checkbox_items);
		const processCheckEvent = this.processCheckEvent.bind(this);
		return checkbox_items.map(item => {
			return(
					<li className="list-group-item" key={item.id}>
						<AnatomyItem item={item} onCheckEvent={processCheckEvent}/>		
						{this.generateSubItemCheckbox(item.sub_items)}			
					</li>
				);
		});
	}

	render(){
		return(
				<ul className="list-group">
					{this.generateCheckBox(this.state.ChestAnatomyItems)}
				</ul>
			);
	}
}

export default ChestAnatomyCheckBox;