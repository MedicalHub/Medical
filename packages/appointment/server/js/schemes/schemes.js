AppointmentSchema = {};

AppointmentSchema.schema = new SimpleSchema({
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
		type: Date,
	},
	start: {
		type: Date
	},
	end: {
		type: Date
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
});

Appointments.attachSchema(AppointmentSchema.schema);

NotiSchema = {}

NotiSchema.contents = new SimpleSchema({
	message: {
		type: String,
		optional: true
	},
	date: {
		type: Date,
		optional: true
	}
});

NotiSchema.schema = new SimpleSchema({
	belongs_to: {
		type: String,
	},
	contents: {
		type: [NotiSchema.contents],
		optional: true
	},
});

Notifications.attachSchema(NotiSchema.schema);