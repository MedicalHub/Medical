LoginSchema = {};

	LoginSchema.login = new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		}
	});

	LoginSchema.register= new SimpleSchema({ 	
		firstName: 	{	type: String,	regEx: /^[a-zA-Z-]{2,25}$/,	label : 'First Name' 	},
		lastName:  	{	type: String,	regEx: /^[a-zA-Z]{2,25}$/, 	label : 'Last Name'		},
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password : 	{	type: String,	regEx: /^[A-Z]{2}$/		, label : 'Password'		},
		confirmPassword: {	type: String, label: "Enter the password again", regEx: /^[A-Z]{2}$/,
    custom: function () {
      if (this.value !== this.field('password').value) {
        return "passwordMismatch";
      }
    }
  },
		gender:    	{	type: String,	allowedValues: ['Male', 'Female'] , label : 'Gender'},
		birthday : 	{	type: Date,	   /*	autoform: {	 afFieldInput: {type: "bootstrap-datepicker"  } },*/  label : 'Birthday'	},
	});

	LoginSchema.passreset= new SimpleSchema({ 	
		email 	: 	{	type: String,	regEx: SimpleSchema.RegEx.Email  , label : 'Email'	},
		password: {	 	type: String,  	regEx: /^[A-Z]{2}$/		,label : 'Password' 		},
		confirmPassword: {type: String,	regEx: /^[A-Z]{2}$/		,label : 'Renter Password' ,
			custom: function () {
				if (this.value !== this.field('password').value) {
				return "passwordMismatch";
			}
		}
																							},
	});



