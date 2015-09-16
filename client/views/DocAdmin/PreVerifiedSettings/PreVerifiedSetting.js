Template.PreVerifiedSetting.helpers({
	State: function () {
		return {
			Rvar : new ReactiveVar(0),
			templates: [{
				name: 'PersonalSettings',
			}, {
				name: 'SocialSettings',
			}, {
				name: 'ProfessionSettings',
			}, {
				name: 'WorkPlaceSettings',
			}, {
				name: 'CalendarSettings',
			}]
		};
	}
});