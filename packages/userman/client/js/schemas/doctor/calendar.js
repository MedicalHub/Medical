DocSchema.events = new SimpleSchema({
	id: {
		type: String,
		optional: true,
	},
	title: {
		type: String,
		autoform: {
			options: function () {
				return _.map(Doctor.findOne(Meteor.userId()).workplaces, function (c, i) {
					return {
						label: "Workplace " + i + ": " + c.name,
						value: i
					};
				});
			}
		}
	},
	allDay: {
		type: Boolean,
		optional: true,
	},
	start: {
		type: Date,
	},
	end: {
		type: Date,
		optional: true,
	},
	url: {
		type: String,
		optional: true,
	},
	className: {
		type: String,
		optional: true,
	},
	editable: {
		type: Boolean,
		optional: true,
	},
	startEditable: {
		type: Boolean,
		optional: true,
	},
	durationEditable: {
		type: Boolean,
		optional: true,
	},
	rendering: {
		type: String,
		optional: true,
		allowedValues: ["background", "inverse-background"]
	},
	overlap: {
		type: Boolean,
		optional: true,
	},
	constraint: {
		type: String,
		optional: true,
	},
	source: {
		type: String,
		optional: true,
	},
	color: {
		type: String,
		optional: true,
	},
	backgroundColor: {
		type: String,
		optional: true,
	},
	borderColor: {
		type: String,
		optional: true,
	},
	textColor: {
		type: String,
		optional: true,
	},
	slot_duration: {
		type: Number,
		optional: true,
	}
});

DocSchema.Daytype = new SimpleSchema({
	day: {
		type: String,optional: true,
		allowedValues: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
	},
	events: {
		type: [DocSchema.events],
		optional: true,
	},
});

DocSchema.Calendar = new SimpleSchema({
	calendar: {
		type: DocSchema.Daytype,
		optional: true,
		/*		autoform: {
					options: function () {
						return _.map(Doctor.findOne(Meteor.userId()).calendar, function (c, i) {
							return {
								label: "Copy from  :" + c.name,
								value: Doctor.findOne(Meteor.userId()).calendar[i]
							}
						});
					}
				}*/
	},
});