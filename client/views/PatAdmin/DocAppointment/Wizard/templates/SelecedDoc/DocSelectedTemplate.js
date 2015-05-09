Template.DocSelectedTemplate.helpers({
	doc: function () {
		self = this;
		return Doctor.findOne(Template.parentData(3).states[self.index - 1].SelDoc_);
	},
	State: function () {
		self = this;
		return {
			states: [{
				template: 'PDateSelection',
				SelDoc_: Template.parentData(3).states[self.index - 1].SelDoc_,
				Date_: "",
				set: false
				}, {
				template: 'PWorkPlace',
				Workplace_: "",
				set: false
				}, {
				template: 'PSlotSelection',
				Slot_: "",
				set: false
				}, {
				template: 'PAppointConfirm',
				set: false
				}]
		};
	}
});

Template.DocSelectedTemplate.onRendered(function () {
	//	_.extend(Template.currentData(), {	});
	console.info(Template.parentData(3));
});