AutoForm.hooks({
	register_form: {
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			this.event.preventDefault();
			console.log(insertDoc);
			//Meteor.loginWithGoogle();
			self = this;
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
					self.done(error);
				} else {
					self.done();
				}
			});
		},
		onError: function (formType, error) {
			console.log(error);
		},
		onSuccess: function (formType, result) {}
	},
	login_form: {
		onSubmit: function (insertDoc, updateDoc, currentDoc) {
			this.event.preventDefault();
			//console.log(this);
			//Meteor.loginWithGoogle();
			self = this;
			Meteor.loginWithPassword(insertDoc.email, insertDoc.password, function (error) {
				if (error) {
					self.done(error);
				} else if (_.contains(Roles.getRolesForUser(Meteor.userId()), Session.get("role"))) {
					self.done();
				} else {
					console.log("Wrong Selection Wrong Selection Wrong Selection")
					self.done(new Meteor.Error("Wrong Selection", "Wrong Selection"));
					//self.done(new Error("Wrong Selection"));
				}
			});
		},
		onError: function (formType, error) {
			console.log(error.reason);
		},
		onSuccess: function (formType, result) {},
	},
});