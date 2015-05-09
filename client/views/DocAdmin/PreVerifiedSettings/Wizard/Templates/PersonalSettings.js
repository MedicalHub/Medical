Template.PersonalSettings.helpers({
	formtype: function () {
		if (Roles.userIsInRole(Meteor.userId(), 'noinfo')) {
			return "update"
		} else {
			return "readonly"
		}
	},
	doc: function () {
		return Doctor.findOne(Meteor.userId());
	},
	updated: function () {
		if (!PreVerifiedSettingWizardAutoformvalidRVAr.get()) {
			PreVerifiedSettingWizardAutoformvalidRVAr.set(true);
			Template.parentData(3).states[this.index].set = true;
			console.log(Template.parentData(3).states);
			PreVerifiedSettingWizardvalidRVAr.set(false);
			return "updated";
		} else {
			return "";
		}
	}
});
AutoForm.hooks({
	DocPersonalSettingsForm: {
		onSuccess: function (formType, result) {
			PreVerifiedSettingWizardAutoformvalidRVAr.set(false);
			console.info("success");
		},
	}
});