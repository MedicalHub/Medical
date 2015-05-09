Template.PAppointmentHead.helpers({
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

Template.PAppointmentHead.events({
	'click button.btn-success': function (e) {
		e.preventDefault();
		e.stopPropagation();
		index = parseInt(event.target.className.split(" ").splice(0)[0][1]);
		Template.parentData(1).states[index].set = false;
		console.info(Template.parentData(5));
		console.info(Template.parentData(2));
		PWizValidRVAr.set(false);
	},
	'click button': function (e) {
		e.preventDefault();
		e.stopPropagation();
	}
});