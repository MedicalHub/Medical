Template.SocialSettings.events({
	'click button': function (e) {
		e.preventDefault();
		e.stopPropagation();
		self = this;
		console.log();
		console.log(self.index);
		Template.parentData(3).states[self.index].set = true;
		console.log(Template.parentData(3).states);
		PreVerifiedSettingWizardvalidRVAr.set(false);
	}
});