
Template.PolyWizard.helpers({
	template: function () {
		return this.templates[this.Rvar.get()];
	},
	head: function () {
		return {
			index: Template.instance().PreVerifiedSettingWizardRVAr.get().index
		};
	},
});

Template.PolyWizard.onRendered(function () {
	//	_.extend(Template.currentData(), {	});
	Template.currentData()['Rvar'] = new ReactiveVar(0);

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


Template.PolyWizardHead.helpers({
	bstate: function (number) {
		if (number == this.index) {
			return "btn-outline btn-primary";
		} else if (number < this.index) {
			return "btn-success";
		} else {
			return "btn-disabled";
		}
	}
});

Template.PolyWizardHead.events({
	'click button.btn-success': function (e) {
		e.preventDefault();
		e.stopPropagation();
		index = parseInt(event.target.className.split(" ").splice(0)[0][1]);
		console.info(index);
		console.info(Template.parentData(1));
		Template.parentData(1).states[index].set = false;
		console.log(Template.parentData(1));
		PreVerifiedSettingWizardvalidRVAr.set(false);
	}
});