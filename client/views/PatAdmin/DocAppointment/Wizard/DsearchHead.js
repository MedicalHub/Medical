Template.DsearchHead.helpers({
	bstate: function (number) {
		if (number == this.index) {
			return "btn-outline btn-primary";
		} else if (number < this.index) {
			return "btn-success";
		} else {
			return "btn-disabled";
		}
	}
});

Template.DsearchHead.events({
	'click button.btn-success': function (e) {
		e.preventDefault();
		e.stopPropagation();
		index = parseInt(event.target.className.split(" ").splice(0)[0][1]);
		console.info(index);
		console.info(Template.parentData(1));
		Template.parentData(1).states[index].set = false;
		console.log(Template.parentData(1));
		DvalidRVAr.set(false);
	}
});