var Schema = {};

	Schema.email = new SimpleSchema({
	address: 	{	type: String,	regEx: SimpleSchema.RegEx.Email					},
	verified: 	{	type: Boolean													},
	});
	
	Schema.User = new SimpleSchema({
	username:	{	type: String,	regEx: /^[a-z0-9A-Z_]{3,15}$/,	optional: true,	},
	emails: 	{	type: [Schema.email],	optional: true							},
	createdAt:  {	type: Date			,autoValue: function() { return new Date;}	},
	services: 	{	type: Object,	optional: true,		blackbox: true				},
	roles: 		{	type: Object,						blackbox: true				}, //defauth value
    
	});

Meteor.users.attachSchema(Schema.User);
