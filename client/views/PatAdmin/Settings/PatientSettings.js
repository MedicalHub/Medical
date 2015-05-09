Template.PatientSettings.helpers ({
	pat : function () {
		return Patient.findOne({_id:Meteor.userId()});
	}
});
Template.PatientSettings.onCreated(function () {
  // Use this.subscribe inside onCreated callback


});
Template.PatientSettings.helpers ({
	formtype : function () {
		if ( Roles.userIsInRole(Meteor.userId(), 'noinfo')   ) {
		return "update"
		}
		else { return "readonly" }
	}
});
