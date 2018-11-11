const ChestAnatomyItems = 
	[
		{id:"1", label:"Chest", check_state:false, sub_items:[
			{id:"1.1", label:"Lungs", check_state:false,sub_items:[
				{id:"1.1.0", label:"Right Lung", check_state:false,sub_items:[
					{id:"1.1.0.1", label:"Superior Lobe", check_state:false,sub_items:[]},
					{id:"1.1.0.2", label:"Middle Lobe", check_state:false,sub_items:[]},
					{id:"1.1.0.3", label:"Inferior Lobe", check_state:false,sub_items:[]}
				]},
				{id:"1.1.1", label:"Left Lung", check_state:false,sub_items:[
					{id:"1.1.1.0", label:"Superior Lobe", check_state:false,sub_items:[]},
					{id:"1.1.1.1", label:"Inferior Lobe", check_state:false,sub_items:[]}

				]}
			]},
			{id:"1.2", label:"Heart", check_state:false,sub_items:[
				{id:"1.2.0", label:"Left Ventricle", check_state:false,sub_items:[]},
				{id:"1.2.1", label:"Right Ventricle", check_state:false,sub_items:[]},
				{id:"1.2.2", label:"Left Atrium", check_state:false,sub_items:[]},
				{id:"1.2.3", label:"Right Atrium", check_state:false,sub_items:[]},
				{id:"1.2.4", label:"Septum", check_state:false,sub_items:[]}
			]}
		]}
	];

export default ChestAnatomyItems;
