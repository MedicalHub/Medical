AppointmentSchema = {};
AppointmentSchema.date = new SimpleSchema({
	date: {
		type : Date
	}
});
/*AppointmentSchema.schema = new SimpleSchema({
	case_index: {
		type: String,
	},
	patient_id: {
		type: String
	},
	doctor_id: {
		type: String,
	},
	Workplace_id: {
		type: String,
	},
	date: {
		type Date,
	},
	start: {
		type Date
	},
	end: {
		type Date
	},
	status: {
		type: String,
		allowedValues: ["open", "closed", "reopened", "other"],
		autoValue: function () {
			return "open"
		},
		optional: true,
	},
	createdAt: {
		type: Date,
		autoValue: function () {
			return new Date();
		}
	},
	description: {
		type: String,
		optional: true,
	}
	//Add attachments field
});*/