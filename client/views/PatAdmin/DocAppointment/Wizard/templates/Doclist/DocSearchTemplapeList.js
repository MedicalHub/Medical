Template.DocSearchTemplateList.events({
	'click .btn-xs': function(e) {
		e.preventDefault();
		e.stopPropagation();
		console.log(Template.parentData(1).index);
		Template.parentData(4).states[Template.parentData(1).index].SelDoc_=this._id;
		Template.parentData(4).states[Template.parentData(1).index].set=true;
		console.log(Template.parentData(4).states[Template.parentData(1).index].SelDoc_);
		DvalidRVAr.set(false);
	}
});

