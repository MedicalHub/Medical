PatSchema = {};
	
	PatSchema.UserCountry = new SimpleSchema({ 	
		name: 	{	type: String	},
		code: 	{	type: String,	regEx: /^[A-Z]{2}$/		}
	});

	PatSchema.UserProfile = new SimpleSchema({
	firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,						},
	lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/,						},
	birthday:  	{	type: Date,		optional: true									},
	gender:    	{	type: String,	allowedValues: ['Male', 'Female'],	optional: true	},
	organization:{	type: String,	regEx: /^[a-z0-9A-z .]{3,30}$/,	optional: true	},
	website:   	{	type: String,	regEx: SimpleSchema.RegEx.Url,	optional: true	},
	bio:       	{	type: String,	optional: true							},
	country:   	{	type: PatSchema.UserCountry,	optional: true						},
	});
	
	PatSchema.email = new SimpleSchema({
	address: 	{	type: String,	regEx: SimpleSchema.RegEx.Email					},
	verified: 	{	type: Boolean													},
	});
	
PatSchema.User = new SimpleSchema({
	profile: 	{	type: PatSchema.UserProfile,									},
});


Patient = new Mongo.Collection("patients");
