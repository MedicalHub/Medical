CnsrctTree = function (schema,doc) {
	// Check doc wrt schema


	_.map(schema._schemaKeys ,function(suffix){
		console.log(suffix.split('.'));
		_.reduce(suffix.split('.'),function(memo, key){ 
			console.log(key);

			if(key == '$') {
				console.log('key == $');
				console.log(memo);
				memo[0]={};

				return memo[0];
			}
			else {
				memo[key]='';
				console.log(memo);
				return memo;
			}

		},tree);
 
	});

	tree = {};
	pointer = {};
	stack = _.clone(schema.objectKeys().reverse());
	address_stack= [];
	address_stack.push(tree);

	_.map(schema.objectKeys().reverse(),function(suffix){ address_stack.push(tree[suffix]='') });

	//_.map(schema.objectKeys().reverse(),function(suffix){ doc_stack.push(doc[suffix]?doc[suffix]:''); })


	schema_name = schema._schema;
	while (stack[0]) {
		console.log(tree);
		console.log(address_stack);
		console.log(stack);
		flatname = stack.pop();
		pointer = address_stack.pop();
		//value = doc_stack.pop();

		if  (schema_name[flatname].type.name != "Array" && schema_name[flatname].type.name != "Object") {

			pointer = {type:schema_name[flatname].type.name,name:name,value:'',attr:''};
		}
		else if (schema_name[flatname].type.name == "Object") {
			names=schema.objectKeys(flatname);
			_.map(names.reverse(), function(suffix){ stack.push(name+'.'+suffix); });
			_.map(names.reverse(), function(suffix){ address_stack.push(pointer[suffix]=''); });
			//_.map(schema.objectKeys().reverse(),function(suffix){ doc_stack.push(doc[suffix]?doc[suffix]:''); })
		}
		else {
			stack.push(flatname+'.$');
			address_stack.push(pointer=[]);
			flatname = stack.pop();
			pointer = address_stack.pop();
			names=schema.objectKeys(flatname);
			_.map(names.reverse(), function(suffix){ stack.push(flatname+'.'+suffix); });
			_.map(names.reverse(), function(suffix){ address_stack.push( pointer.push({suffix:''}) )});
		}
	}

	return tree;
} 