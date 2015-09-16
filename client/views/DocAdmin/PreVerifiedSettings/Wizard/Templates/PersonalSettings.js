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
	hooks :  {
		DocPersonalSettingsForm: {
			onError: function (formType, error) {
				console.log('onerror');
			},
			onSuccess: function (formid) {
				console.log(Template.instance());
				console.log(Template.parentData(0));
				console.log(Template.parentData(1));	
				//Rvar = Template.parentData(1).Rvar.get();
				//Rvr += 1;
				//Template.parentData(1).Rvar.set(Rvr);
			}
		}
	}
});
