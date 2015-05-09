Template.PSlotSelection.helpers({
	dayCalendar: function () {
		self = this;
		doc = Template.parentData(3).states[0].SelDoc_;
		day = Template.parentData(3).states[0].Date_.getDay();
		workplace = Template.parentData(3).states[1].Workplace_;
		console.info(doc + " " + day + " " + workplace);
		valid_calendar = 0;
		console.info(Doctor.findOne(doc).calendar[valid_calendar].eachday[day].events);
		console.log(_.map(Doctor.findOne(doc).calendar[valid_calendar].eachday[day].events, function (value, index) {
			return {
				value: value,
				index: index
			};
		}));
		return _.map(Doctor.findOne(doc).calendar[valid_calendar].eachday[day].events, function (value, index) {
			return {
				value: value,
				index: index
			};
		});
	},
});
Template.PSlotStatus.events({
	'click button': function (e) {
		e.preventDefault();
		e.stopPropagation();
		self = this;
		Template.parentData(3).states[self.index].Slot_ = 0;
		Template.parentData(3).states[self.index].set = true;
		console.log(Template.parentData(3).states);
		PWizValidRVAr.set(false);
	}
});