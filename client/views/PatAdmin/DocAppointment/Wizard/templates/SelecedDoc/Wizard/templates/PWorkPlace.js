Template.PWorkPlace.helpers({
	workplaces: function () {
		self = this;
		return _.map(Doctor.findOne(Template.parentData(3).states[self.index - 1].SelDoc_).workplaces, function (value, index) {
			return {
				value: value,
				index: index
			};
		});
	},
});

Template.PWorkPlaceList.events({
	'click button': function (e) {
		e.preventDefault();
		e.stopPropagation();
		console.log(this.index);
		self = this;
		Template.parentData(4).states[Template.parentData(1).index].Workplace_ = this.index;
		Template.parentData(4).states[Template.parentData(1).index].set = true;
		console.log(Template.parentData(4).states);
		PWizValidRVAr.set(false);
	}
});