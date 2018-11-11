import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChestAnatomyCheckBox from "./components/ChestAnatomyCheckBox.js";

class App extends Component{
	constructor(props){
		super(props);
	}

	render(){	
		return(
				<div className="row style_panel">
						<ChestAnatomyCheckBox />
				</div>
			);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));