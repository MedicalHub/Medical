SimpleSchema.debug = true;
DocSchema = {};
DocSchema.Workplace = {};

DocSchema.UserCountry = new SimpleSchema({ 	
	name: 	{	type: String														},
	code: 	{	type: String,	regEx: /^[A-Z]{2}$/									}
});

DocSchema.UserProfile = new SimpleSchema({
	firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,						},
	lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/,						},
	birthday:  	{	type: Date,		optional: true									},
	gender:    	{	type: String,	allowedValues: ['Male', 'Female'],	optional: true	},
	organization:{	type: String,	regEx: /^[a-z0-9A-z .]{3,30}$/,	optional: true	},
	website:   	{	type: String,	regEx: SimpleSchema.RegEx.Url,	optional: true	},
	bio:       	{	type: String,	optional: true							},
	country:   	{	type: DocSchema.UserCountry,	optional: true						},
});
/////////////////////////////

DocSchema.Workplace.UserCountry = new SimpleSchema({ 	
	name: 	{	type: String													},
	code: 	{	type: String,	regEx: /^[A-Z]{2}$/								}
	});

DocSchema.Workplace.address = new SimpleSchema({ 
	street :	{	type : String,			optional : true						},
	pincode:	{	type : Number,				optional : true					},
	city : 		{	optional : true,				type : String				},
	country:   	{	type: DocSchema.Workplace.UserCountry,	optional: true			},
}); 

DocSchema.Workplace.schema = new SimpleSchema({ 
	name : 		{	type : String	,					optional : true,		},
	address : 	{	type : DocSchema.Workplace.address,	optional : true				}, 
	type :		{	optional : true,	type : String,	allowedValues: ["Clinic", "Hospital"]},
});

///////////////////////////////
DocSchema.appointments = new SimpleSchema({
	booked:{type: Boolean},
	start: {		type: Date,	},
	end: {		type: Date,	optional: true,	},
	block_index:{type :Number},
	appointment_id :{type :String,optional: true,},
});

DocSchema.events = new SimpleSchema({ 
	id: {type: String,	optional: true,},
	title: {	type: String,},
	allDay: {	type: Boolean,	optional: true,	},
	start: {		type: Date,	},
	end: {		type: Date,	optional: true,	},
	url: {		type: String,		optional: true,	},
	className: {		type: String,		optional: true,	},
	editable: {		type: Boolean,		optional: true,	},
	startEditable: {		type: Boolean,		optional: true,	},
	durationEditable: {		type: Boolean,		optional: true,	},
	rendering: {		type: String,		optional: true,		allowedValues: ["background", "inverse-background"]	},
	overlap: {		type: Boolean,		optional: true,	},
	constraint: {		type: String,		optional: true,	},
	source: {		type: String,		optional: true,	},
	color: {		type: String,		optional: true,	},
	backgroundColor: {		type: String,		optional: true,	},
	borderColor: {		type: String,		optional: true,	},
	textColor: {		type: String,		optional: true,	},
	slot_duration: {		type: Number,		optional: true,	},
	bookings :{type :[DocSchema.appointments]},
	event_index :{type :Number},
});

DocSchema.eachday = new SimpleSchema({ 
	day:		{	type: Number			,	allowedValues: [0,1,2,3,4,5,6],optional: true	},
	events :		{	type: [DocSchema.events]							},
});
DocSchema.Calendar = new SimpleSchema({ 
	prebookingweeks :{type: Number,optional: true	},
	eachday :{type: [DocSchema.eachday]},
	valid_from : {type: Date			,optional: true	},
	valid_till : {type: Date			,optional: true	},
});

//////////////////////////////////

DocSchema.qualification = new SimpleSchema({
	course :	{	type : String,	max:144,		optional : true				},
	college :	{	type : String,	max:144,		optional : true				},
	city :		{	type : String,	max:144,		optional : true				},
});

DocSchema.fields = new SimpleSchema({
	speciality :{	type : String, 												},
	description:{	type : String,	max:144,									},
	type :		{	type : String, 												},
	pinned_cases:{	type : [Number],					optional : true			},
	qualification:{	type : [DocSchema.qualification]							},
});

///////////////////////////////
DocSchema.schema = new SimpleSchema({
	contactnos:	{	type : [Number],	unique : true,optional : true   		}, 
	blood_group:{	type : String ,	    optional : true, 
			allowedValues : ["O+", "O-","A+", "A-","B+", "B-","AB+", "AB-","Unspecified"] 
																				},   
	fields :	{	type : DocSchema.fields,		optional : true				}, 
	profile: 	{	type: DocSchema.UserProfile,								},
	calendar:	{	type : [DocSchema.Calendar]	,	optional : true				},
	workplaces:	{	type : [DocSchema.Workplace.schema]	,	optional : true		}, 
	appointments :{	type : [DocSchema.appointments]	,	optional : true	}
})

Doctor = new Mongo.Collection("doctor");
Doctor.attachSchema(DocSchema.schema);

