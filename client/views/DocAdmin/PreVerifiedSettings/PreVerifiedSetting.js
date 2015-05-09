Template.PreVerifiedSetting.helpers({
	State: function () {
		return {
			states: [{
				template: 'PersonalSettings',
				set: false
				}, {
				template: 'SocialSettings',
				set: false
				}, {
				template: 'ProfessionSettings',
				set: false
				}, {
				template: 'WorkPlaceSettings',
				set: false
				}, {
				template: 'CalendarSettings',
				set: false
				}]
		};
	}
});