// Write your package code here!

Template.PolyForm.onRendered(function () {
	self=this.data;

	Meteor.setTimeout(function() {
//		_.each( PolyUtility.binder,function(self) {	
	console.log(this);

	document.getElementById(this.id).addEventListener('iron-form-submit', function() {
		formid = this.id;
		FlatformData=document.getElementById(this.id).serialize();
		console.log(FlatObjectParser.transpose(FlatformData).data());
		this['_data']=FlatObjectParser.transpose(FlatformData).data();
		this.hooks[formid].onSubmit.bind(this._data)(formid);
		PolyFlow.bind(this._data)(this);
	}.bind(this));
	 
	document.getElementById(this.id).addEventListener('iron-form-invalid', function() {
		formid = this.id;
		console.info("form Invalidation listener");
		FlatformData=document.getElementById(this.id).serialize();
		console.log(FlatObjectParser.transpose(FlatformData).data());
		this['_data']=FlatObjectParser.transpose(FlatformData).data();
		this.hooks[formid].onInvalid.bind(this._data)(formid);
	}.bind(this));
}.bind(self),500);
});

Template.PolyForm.events({
	'click paper-button': function (event) { 
		event.preventDefault();
		event.stopImmediatePropagation();
		document.getElementById(this.id).submit();
	}
});

Template.Polyfield.helpers({
	type: function () {
		context = this;
		parent_context = Template.parentData(1);
		html = PolyRender(context,parent_context);		
		return html;
	}
});

Template.Polyfield.onRendered(function () {

})


