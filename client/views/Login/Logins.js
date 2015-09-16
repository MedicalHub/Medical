Template.Logins.onRendered (function () { 
	
//Client Email Verification
	Verification();

		//   BIG SHOT THING
	
	Session.set('role', 'phy');
	Session.set('diag', false);
	//////////////////////////////
	$("video").prop('muted', true); 
	$("video").hover(
		function(e) {
			e.preventDefault();
			$("video").prop('muted', false); 
			$(".video-hover").css({ opacity: 1.0 });
			$(".image-hover").css({ opacity: 0.0 });
		},
		function(e) {
			e.preventDefault();
			$("video").prop('muted', true); 
			$(".video-hover").css({ opacity: 0.2 });
			$(".image-hover").css({ opacity: 1 });
		});
	$(".image-hover").hover(
		function(e) {
			e.preventDefault();
			$("video").prop('muted', false); 
			$(".video-hover").css({ opacity: 1.0 });
			if (event.currentTarget.text == "Physician")
				$(".image-hover").css({ opacity: 0.0 });
		});
});

Template.Logins.events ({ 
	// 'click li a': function (event) {
	// 	event.preventDefault();
	// 	//event.stopPropagation();
	// 	if (event.currentTarget.text == "Physician")
	// 	{
	// 		Session.set('role','phy');
	// 	}
	// 	else {
	// 		Session.set('role','pat');
	// 	}
	// },
	'click button#diagnose': function (event) {
		event.preventDefault();
		Session.set('diag',true);
	},
	
});


Template.Logins.helpers ({ 
	hooks : {
		login_form: {
			onSubmit: function (formid) {
				self = this;
				data = this;
				console.log(this);
				Meteor.loginWithPassword(data.email, data.password, function (error) {
					if (error) {
						console.log(error);
					} else if (_.contains(Roles.getRolesForUser(Meteor.userId()), Session.get("role"))) {
						console.log("Wrong Selection Wrong Selection Wrong Selection");
					} else {
						console.log("Logged IN");
					}
				});
			},
			onError: function (formType, error) {
				console.log(error.reason);
			},
			onSuccess: function (formType, result) {},
		},
	}
});
Template.login.helpers ({ 
	hooks : {
		register_form: {
			onSubmit: function () {
				insertDoc = this;
				insertDoc.roles = {
					"__global_roles__": [Session.get("role")]
				};
				profile = {
					firstName: insertDoc.firstName,
					lastName: insertDoc.lastName,
					gender: insertDoc.gender,
					birthday: insertDoc.birthday,
					roles: insertDoc.roles
				};
				options = {
					email: insertDoc.email,
					password: insertDoc.password,
					profile: profile
				};
				console.log(options);
				Accounts.createUser(options, function (error) {
					if (error) {
						console.log(error);
					} else {
						console.log('Created Account');
					}
				});
			},
			onError: function (formType, error) {
				console.log(error);
			},
			onSuccess: function (formType, result) {}
		}
	}
});