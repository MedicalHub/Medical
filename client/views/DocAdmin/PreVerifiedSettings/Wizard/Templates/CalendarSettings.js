Template.CalendarSettings.onCreated(function () {
	slot_duration = [15, 20, 30];
	title = ["CLINIC 1", "CLINIC 2", "CLINIC 1"]

	date = new Date();
	calendar = [];
	eachday = [];

	slotstart = new Date();
	slotend = new Date();
	date.setMinutes(0);

	for (i = 0; i < 5; i++) {
		day = date.getDay();
		events = [];
		for (j = 0; j < slot_duration.length; j++) {
			slotstart.setHours(9 + j * 3);
			slotstart.setMinutes(0);
			slotend.setHours(9 + j * 3);
			slotend.setMinutes(slot_duration[j]);
			event = {
				event_index: j,
				start: new Date(slotstart),
				slot_duration: slot_duration[j],
				title: title[j],
				editable: true,
				overlap: false,
			};
			bound = 120 / slot_duration[j];
			booking = [];
			for (k = 0; k < bound; k++) {
				slots = {
					booked: false,
					start: new Date(slotstart),
					end: new Date(slotend),
					block_index: k,
				};
				slotstart.setMinutes(slotstart.getMinutes() + slot_duration[j]);
				slotend.setMinutes(slotend.getMinutes() + slot_duration[j]);
				booking.push(slots);
			};
			_.extend(event, {
				bookings: booking,
				end: new Date(slotend),
			});
		events.push(event);
		}
		eachday.push(_.extend({
			day: day
		}, {
			events: events
		}));
		slotstart.setDate(slotstart.getDate() + 1);
		slotend.setDate(slotend.getDate() + 1);
	};



	calendar.push({
		eachday: eachday
	});
	console.log(calendar);
	Doctor.update({
		_id: Meteor.userId()
	}, {
		$set: {
			calendar: calendar
		}
	});
});
Template.CalendarSettings.helpers({
	formtype: function () {
		if (Roles.userIsInRole(Meteor.userId(), 'noinfo')) {
			return "update"
		} else {
			return "readonly"
		}
	},
	calendarOptions: {
		// Standard fullcalendar options
		height: 700,
		//hiddenDays: [0],
		slotDuration: '00:15:00',
		minTime: '08:00:00',
		maxTime: '21:00:00',
		lang: 'en',
		defaultView: 'agendaWeek',
		// Function providing events reactive computation for fullcalendar plugin
		events: function (start, end, timezone, callback) {
			//console.log(start);
			//console.log(end);
			//console.log(timezone);
			var events = [];
			// Get only events from one document of the Calendars collection
			// events is a field of the Calendars collection document
			//	var calendar = Calendars.findOne({"_id": "calendar1"}, {"fields": {	'events': 1		}});
			var calendar = Doctor.findOne(Meteor.userId()).calendar[0];
			// events need to be an array of subDocuments:
			// each event field named as fullcalendar Event Object property is automatically used by fullcalendar
			calendar.eachday.forEach(function (eachday) {
				if (eachday && eachday.events) {
					eachday.events.forEach(function (event) {
						event = _.omit(event, 'bookings');
						eventDetails = {};
						for (key in event)
							eventDetails[key] = event[key];
						events.push(eventDetails);
					});
				}
			});
			callback(events);
		},
		// Optional: id of the calendar
		//id: "calendar1",
		// Optional: Additional classes to apply to the calendar
		addedClasses: "col-lg-12",
		// Optional: Additional functions to apply after each reactive events computation
		autoruns: [
                function () {
				console.log("user defined autorun function executed!");
                }
            ]
	},
	doc: function () {
		return Doctor.findOne(Meteor.userId());
	},
});

Template.CalendarSettings.onRendered(function () {

});


AutoForm.hooks({
	DocCalendarSettings: {
		onSuccess: function (formType, result) {
			PreVerifiedSettingWizardAutoformvalidRVAr.set(false);
		},
	}
});