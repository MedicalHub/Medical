PolyFlow = function (context) {
	self = this;
	var errorHandle = function(error,id) {
	selectedform = self.selectedform;
	if(error) {
		self[selectedform].hooks.onError(self.id);
	}
	else {
		console.log(context);
		console.log(self[selectedform]);
		context.hooks[selectedform].onSuccess.bind(self)(selectedform);
		//self[selectedform].hooks.onSuccess(selectedform);
	}
};
var errorHandle1 = function(arg1) {
	selectedform = self.selectedform;
	if(arg1.error != "") {
		self[selectedform].hooks.onSuccess(self.id);
	}
	else {
		self[selectedform].hooks.onError(self.id);
	}
}
	Collection = window[context.collection];
	formid = context.id;
	formData = self[context.id]
	if (context.type.toLowerCase() == "method") {
		if (context.method != "") {
			Meteor.call(context.method,formid,errorHandle1(arg1));
		}
		else {
			throw new Meteor.Error("No method name defined");
		}
	}
	else if(context.collection != "" ) {
		if(context.type.toLowerCase() == "insert") {
			console.log(self);
			Collection.insert(formData,errorHandle());
		}
		else if(context.type.toLowerCase() == "update") {
			//Collection.update(formData._id,formData,errorHandle());
				Collection.update(formData._id,formData);
		
		}
		else if(context.type.toLowerCase() == "upsert") {
			Collection.upsert(formData._id,formData,errorHandle(error,id));
		}		
		else {
			throw new Meteor.Error("Illegal collection operation");
		}
	}
	else if (context.schema != "") {

	}
	else {
		throw new Meteor.Error("Form must doesnot have either schema or collection");
	}
}
