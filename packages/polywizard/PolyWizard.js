
Template.PolyWizard.helpers({
	template: function () {
		self = this;  
		index = this.Rvar.get();
		console.log(index);
		return this.templates[index].name;
	},
	head: function () {
		return this.templates;
	},
});

Template.PolyWizard.onRendered(function() {
	console.log(Template.instance());
	Template.currentData()['Rvar'].set(0);
});


Template.PolyWizardHead.helpers({
	state: function (index) {
	active = Template.parentData(2).Rvar.get();
	console.log(active+' '+index);
		if (index == active) {
			return "Active";
		} else if (index < active) {
			return "success";
		} else {
			return "disabled";
		}
	}
});

Template.PolyWizardHead.events({
	'click paper-fab': function (event) {
		console.log('paper-fab clicked');
		// event.preventDefault();
		// event.stopPropagation();
		// index = parseInt(event.target.className.split(" ").splice(0)[0][1]);
		// console.info(index);
		// console.info(Template.parentData(1));
		// Template.parentData(1).states[index].set = false;
		// console.log(Template.parentData(1));
		// PreVerifiedSettingWizardvalidRVAr.set(false);
	}
});