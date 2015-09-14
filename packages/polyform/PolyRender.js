PolyUtility = {
	schema_lookup: function lookup(obj) {
		var ref = window, arr;
		if (typeof obj === "string") {
			arr = obj.split(".");
			while(arr.length && (ref = ref[arr.shift()]));
			if (!ref) {
				throw new Error(obj + " is not in the window scope");
			}
			return ref;
		}
		return obj;
	},
};

 
PolyRender = function(context,parent_context) {

	schema = PolyUtility.schema_lookup(parent_context.schema);
	doc = parent_context.doc;
	schema_name = schema._schema;
	
	name = context.name || '';
	var stack =  (name == '') ?schema.objectKeys().reverse() : [name];
	console.log(stack);
	console.log(name);

	tree ={};
	html = "";

	var value_stack =[];
	value_stack.push(doc);
	console.log(doc);
	FlatDoc=  FlatObjectParser.untranspose(doc);
	console.log(FlatDoc);
	attr = {};
	while (stack[0]) {
		//console.log(stack);
		FlatName = stack.pop();
	//	values =value_stack.pop();
	//value = doc[FlatName];

	//console.log(tree)
	if (FlatName == '__Object_End'){

		html += '</div></paper-card>'+'\n';
	}
	else if (FlatName == '__Array_End') {

		html += '<paper-fab icon="add"></paper-fab></div></paper-card>'+'\n';
	}
	else if (schema_name[FlatName].type.name != "Array" && schema_name[FlatName].type.name != "Object") {
		tree[FlatName.replace(/\.\$/g, '[0]')]='';
		tree = FlatObjectParser.transpose(tree).data();
		name = FlatName.replace(/\.\$/g, '[0]');
		value = FlatDoc[FlatName.replace(/\.\$/g, '[0]')];
		attr['label'] = _.last(FlatName.split('.'));
		console.log(FlatDoc[FlatName.replace(/\.\$/g, '[0]')]);
		html += '\n'+ PolyMap(schema_name[FlatName].type.name,name,value,attr);
		//console.log(schema_name[FlatName].type.name);

	}
	else if (schema_name[FlatName].type.name == "Object") {
		value_stack.push();
		html += 	PolyMap(schema_name[FlatName].type.name);
		names=schema.objectKeys(FlatName);
		//console.log(FlatName + 'object');
		stack.push('__Object_End');
		_.map(names.reverse(), function(suffix){ stack.push(FlatName+'.'+suffix); });
	}
	else {
		html += 	PolyMap(schema_name[FlatName].type.name);

		stack.push('__Array_End');
		stack.push(FlatName+'.$');
		//console.log(FlatName + 'array');
	}
}
console.log(tree);
return html;
}



