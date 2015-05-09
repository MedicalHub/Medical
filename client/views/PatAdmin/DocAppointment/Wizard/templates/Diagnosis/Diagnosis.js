Template.Diagnosis.events({
	'click button': function (e) {
		e.preventDefault();
		e.stopPropagation();
		Template.parentData(3).states[this.index].set = true;
		DvalidRVAr.set(false);
	},
});