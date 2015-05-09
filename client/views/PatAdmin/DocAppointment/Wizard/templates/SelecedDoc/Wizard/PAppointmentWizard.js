Template.PAppointmentWizard.helpers({
	template: function () {
		return Template.instance().PWizardRVAr.get().value.template;
	},
	data: function () {
		return {index:Template.instance().PWizardRVAr.get().index};
	},
});

Template.PAppointmentWizard.onCreated(function () {
	// Use this.subscribe inside onCreated callback
	this.PWizardRVAr = new ReactiveVar({
		value: {
			template: 'PDateSelection',
			data: null,
		},
		index: 0
	});
	PWizValidRVAr = new ReactiveVar(true);
});


Template.PAppointmentWizard.onRendered(function () {
	//	_.extend(Template.currentData(), {	});
	PAppointmentWizardStates = Template.currentData().states;
	PWizardRVAr = Template.instance().PWizardRVAr;
	console.info(Template.parentData(4));
	console.info(Template.parentData(1));
	Tracker.autorun(function () {
		if (!PWizValidRVAr.get()) {
			PWizValidRVAr.set(true);
			PAppointmentWizardStates.every(function (element, index, array) {
				if (element.set) {
					//Check for further elements ... They must also be set
					return true;
				} else {
					PWizardRVAr.set({
						value: PAppointmentWizardStates[index],
						index: index
					});
					return false;
				}
			});
		}
	});
	PWizValidRVAr.set(false);
});