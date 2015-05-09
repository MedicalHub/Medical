DocSchema.qualification = new SimpleSchema({
	course :	{	type : String,	max:144,		optional : true				},
	college :	{	type : String,	max:144,		optional : true				},
	city :		{	type : String,	max:144,		optional : true				},
});

DocSchema.fields = new SimpleSchema({
	speciality :{	type : String, 												},
	description:{	type : String,	max:144,									},
	type :		{	type : String, 												},
	qualification:{	type : [DocSchema.qualification]							},
});

DocSchema.professional = new SimpleSchema({ 
	fields :	{	type : DocSchema.fields,									}, 
	contactnos:	{	type : [Number],	unique : true,optional : true   		}, 
	blood_group:{	type : String ,	    optional : true, 
			allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
																				}, 
});
