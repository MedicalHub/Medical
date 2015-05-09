
Template.PreVerifiedSettingWizard.helpers({
	template: function () {
		return Template.instance().PreVerifiedSettingWizardRVAr.get().value.template;
	},
	data: function () {
		return {
			index: Template.instance().PreVerifiedSettingWizardRVAr.get().index
		};
	},
});

Template.PreVerifiedSettingWizard.onCreated(function () {
	// Use this.subscribe inside onCreated callback
	this.PreVerifiedSettingWizardRVAr = new ReactiveVar({
		value: {
			template: 'Payment',
		},
		index: 0
	});
	PreVerifiedSettingWizardvalidRVAr = new ReactiveVar(true);
	PreVerifiedSettingWizardAutoformvalidRVAr = new ReactiveVar(true);
});


Template.PreVerifiedSettingWizard.onRendered(function () {
	//	_.extend(Template.currentData(), {	});
	PreVerifiedSettingWizardStates = Template.currentData().states;
	console.info(PreVerifiedSettingWizardStates);
	PreVerifiedSettingWizardRVAr = Template.instance().PreVerifiedSettingWizardRVAr;
	Tracker.autorun(function () {
		if (!PreVerifiedSettingWizardvalidRVAr.get()) {
			PreVerifiedSettingWizardvalidRVAr.set(true);
			PreVerifiedSettingWizardStates.every(function (element, index, array) {
				if (element.set) {
					//Check for further elements ... They must also be set
					return true;
				} else {
					PreVerifiedSettingWizardRVAr.set({
						value: PreVerifiedSettingWizardStates[index],
						index: index
					});
					return false;
				}
			});
		}
	});
	PreVerifiedSettingWizardvalidRVAr.set(false);
});
