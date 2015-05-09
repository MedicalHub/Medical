DocSchema.Workplace = {};

DocSchema.Workplace.UserCountry = new SimpleSchema({ 	
	name: 	{	type: String													},
	code: 	{	type: String,	regEx: /^[A-Z]{2}$/								}
	});

DocSchema.Workplace.address = new SimpleSchema({ 
	street :	{	type : String,			optional : true						},
	pincode:	{	type : Number,				optional : true					},
	city : 		{	optional : true,				type : String				},
	country: {	type: DocSchema.Workplace.UserCountry,	optional: true			},
}); 
DocSchema.Workplace.schema = new SimpleSchema({ 
	name : 		{	type : String	,					optional : true,		},
	address : 	{	type : DocSchema.Workplace.address,	optional : true				}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
});

DocSchema.Workplaces = new SimpleSchema({
	workplaces:	{	type : [DocSchema.Workplace.schema]	,						}, 
});
