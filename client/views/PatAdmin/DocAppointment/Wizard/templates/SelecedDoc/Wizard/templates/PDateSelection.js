Template.PDateSelection.helpers({
	options: function () {
		return {
			options: {
				id: "ok"
			}
		};
	}
});

Template.PDateSelection.events({
	'click button.btn': function (e) {
		e.preventDefault();
		e.stopPropagation();
		self = this;
		Template.parentData(3).states[self.index].Date_ = new Date($("#ojWN9ekmSuJS2e88f").val());
		Template.parentData(3).states[self.index].set = true;
		console.log(Template.parentData(3).states);
		PWizValidRVAr.set(false);
	}
});