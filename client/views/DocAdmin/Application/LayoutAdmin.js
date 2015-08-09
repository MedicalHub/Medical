Template.LayoutAdmin.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  
  this.subscribe('loggeddoctor');
});

Template.LayoutAdminLeftPane.rendered = function(){

}

Template.LayoutAdminLeftPane.helpers({
	name :  function() {
		return	Doctor.findOne({"_id":Session.get("docId")},{'username': 1 ,'_id':0});
	},
	img :  function() {
		return	Doctor.findOne({"_id":Session.get("docId")},{'image': 1 ,'_id':0});
	},
	degree :  function() {
		return	Doctor.findOne({"_id":Session.get("docId")},{'doctor_fields': 1 });
	}
});
Template.LayoutAdminLeftPane.events({
    'click a': function (event) {
		event.preventDefault();
		//event.stopImmediatePropagation();
		//console.log(event.target);
		var ori_mystring = event.target.pathname;
		var mystring = ori_mystring.replace('/','');
		console.log(mystring);
		//console.log(event);
      Session.set('doc_template', mystring);
    }
  });
  
Template.LayoutAdminCentrePane.helpers({
	template : function() {
		if (_.contains(Roles.getGroupsForUser(Meteor.userId()),'noinfo')) {
			return "NewSettings";
		}
		else if (_.contains(Roles.getGroupsForUser(Meteor.userId()),'notverified')) {
			return "Notverified";
		}
		else {
			return Session.get('doc_template');
		}
	}
});
Template.LayoutAdminCentrePane.events({
    'click button.request': function (event) {
		event.preventDefault();
		Roles.removeUsersFromRoles(Meteor.userId(),'noinfo',Roles.GLOBAL_GROUP);
		console.log("request")
	},
	'click .fa-sign-out ': function (event) {
		event.preventDefault();
		Meteor.logout();
		console.log("loggedout doc");
	},
});
