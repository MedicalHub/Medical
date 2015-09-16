	DocSchema.UserCountry = new SimpleSchema({ 	
		name: 	{	type: String	},
		code: 	{	type: String,	regEx: /^[A-Z]{2}$/		}
	});

	DocSchema.UserProfile = new SimpleSchema({
	firstName: 	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/,						},
	lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/,						},
	birthday:  	{	type: Date,		optional: true									},
	gender:    	{	type: String,	allowedValues: ['Male', 'Female'],	optional: true	},
	organization:{	type: String,	regEx: /^[a-z0-9A-Z]{3,30}$/,	optional: true	},
	website:   	{	type: String,	regEx: SimpleSchema.RegEx.Url,	optional: true	},
	bio:       	{	type: String,	optional: true							},
	country:   	{	type: DocSchema.UserCountry,	optional: true						},
	});
	
	DocSchema.email = new SimpleSchema({
	address: 	{	type: String,	regEx: SimpleSchema.RegEx.Email					},
	verified: 	{	type: Boolean													},
	});
	
DocSchema.User = new SimpleSchema({
	profile: 	{	type: DocSchema.UserProfile,									},
});
