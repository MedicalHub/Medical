Template.PDocAppointment.helpers({
	states: function () {
		return {
			states: [{
				Symptom_: "",
				template:'Avatar',
				set: false
				}, {
				Conditipon_: "",
				template:'Diagnosis',
				set: false
				}, {
				Lat_: 12.9342432,
				Log_: 77.70035,
				template:'Location',
				set: false
				}, {
				SelDoc_: "",
				template:'DocSearchTemplate',
				set: false
				}, {
				SelWorkspace_: "",
				SelSlot_: "",
				Date_:"",
				template:'DocSelectedTemplate',
				set: false
				}, {
				template:'Payment',
				set: false
			 }]
		};
	},
});

Template.Dsearch.helpers({
	template: function () {
		return Template.instance().DsearchRVAr.get().value.template;
	},
	data: function () {
		return {
			index: Template.instance().DsearchRVAr.get().index
		};
	},
});

Template.Dsearch.onCreated(function () {
	// Use this.subscribe inside onCreated callback
	this.subscribe('doclist');
	this.DsearchRVAr = new ReactiveVar({
		value: {
			template: 'Payment',
			data: null,
		},
		index: 0
	});
	DvalidRVAr = new ReactiveVar(true);
});


Template.Dsearch.onRendered(function () {
	//	_.extend(Template.currentData(), {	});
	DsearchStates = Template.currentData().states;
	DsearchRVAr = Template.instance().DsearchRVAr;
	Tracker.autorun(function () {
		if (!DvalidRVAr.get()) {
			DvalidRVAr.set(true);
			DsearchStates.every(function (element, index, array) {
				if (element.set) {
					//Check for further elements ... They must also be set
					return true;
				} else {
					DsearchRVAr.set({
						value: DsearchStates[index],
						index: index
					});
					return false;
				}
			});
		}
	});
	DvalidRVAr.set(false);
});