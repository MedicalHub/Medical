AutoForm.setDefaultTemplate('reactAutoformMaterialUi');
const ThemeManager = new mui.Styles.ThemeManager();

Template.main.helpers({
	Layouttemplate: function(){
		template = Session.get("role");
		loggedin = 	Meteor.userId();
		return Meteor.userId() ? 'Layout' : 'Logins';  
	},	
});
