AutoForm.setDefaultTemplate('reactAutoformMaterialUi');
//AutoForm.setDefaultTemplateForType('afObjectField', '');
//AutoForm.setDefaultTemplateForType('afObjectField', '');
//AutoForm.setDefaultTemplateForType('afArrayField', '');
//AutoForm.setDefaultTemplateForType('afEachArrayItem', '');

const ThemeManager = new mui.Styles.ThemeManager();

Template.main.helpers({
	Layouttemplate: function(){
		template = Session.get("role");
		loggedin = 	Meteor.userId();
		return Meteor.userId() ? 'Layout' : 'Logins';  
	},	
});
