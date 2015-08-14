AutoForm.setDefaultTemplate('paper');
Template.main.helpers({
	Layouttemplate: function(){
		template = Session.get("role");
		loggedin = 	Meteor.userId();
		if(Session.get('diag')) {
			return 'LayoutSearch';
		}
		else if(_.contains(Roles.getRolesForUser(loggedin) , template )) {
			if(template == 'phy'){
				return 'LayoutAdmin';
			}
			else {
			  return 'LayoutSearch';
			}
		}
		else {
			return 'Logins';
		}
	},
});
