Template.Layout.helpers({
	sidemenu : function () {
		LayoutTemplates=
		[
		{name:'DocAdmin',value:[
		{name:'Home',value:[{name:"Index",value:"Home"}]},
		{name:'Settings',value:[{name:"NewSettings",value:"Personal Settings"},{name:"Index",value:"Professional Settings"}]},		
		{name:'Appointment',value:[{name:"AppointmentWizard",value:"Appointment Wizard"}]},
		{name:'Mailbox',value:[{name:"Mailbox",value:"Inbox"},{name:"MailDetail",value:"Email View"},{name:"MailCompose",value:"Compose email"}]},
		{name:'Statistics',value:[{name:"GraphPeity",value:"Peity Charts"}]},
		]},
		{name:'PatAdmin',value:[
		{name:'Home',value:[{name:"PDocAppointment",value:"Home"}]},
		{name:'Settings',value:[{name:"PatientSettings",value:"Personal Settings"}]},		
		{name:'Appointment',value:[{name:"PDocAppointment",value:"Appointment Wizard"}]},
		{name:'Archive',value:[{name:"GraphMorris",value:"Timeline"},{name:"GraphRickshaw",value:"Open Cases"},{name:"GraphSparkline",value:"History"}]},			
		{name:'Avatar',value:[{name:"Avatar",value:"Cow"},{name:"Diagnosis",value:"Diagnosis"}]},
		{name:'Statistics',value:[{name:"GraphPeity",value:"Peity Charts"}]},
		]},
		{name:'DocPreSettings',value:[
		{name:'Home',value:[{name:"PreVerifiedSetting",value:"Setting"}]},
		]},
		{name:'Diagnose',value:[
		{name:'Home',value:[{name:"PDocAppointment",value:"Home"}]},
		{name:'Avatar',value:[{name:"Avatar",value:"Cow"},{name:"Diagnosis",value:"Diagnosis"}]},
		]},						
		];
		if (Meteor.userId()) {
			

			if(Session.equals('role','phy')) {
				// Doc Not verified

				if (Roles.userIsInRole(Meteor.userId(), ['phy','noinfo'], Roles.GLOBAL_GROUP)) {
					Session.set('LayoutTemplate','PreVerifiedSetting');
					return LayoutTemplates[2].value;
				}
				else if (Roles.userIsInRole(Meteor.userId(), ['phy','notverified'], Roles.GLOBAL_GROUP)) {
					Session.set('LayoutTemplate','PreVerifiedSetting');
					return LayoutTemplates[2].value;
				}
				//Verified Doctor
				else {
					Session.set('LayoutTemplate','Index');
					return LayoutTemplates[0].value;					
				}
			}
			// Patient Logged
			else if (Session.equals("role",'pat')) {
				Session.set('LayoutTemplate','PDocAppointment');
				return LayoutTemplates[1].value;								
			}
			else {
				// Diagnose -- Not logged No one
				Session.set('LayoutTemplate','PDocAppointment');
				return LayoutTemplates[3].value;		
			} 


		}
		else {
			//then diagnose 
			Session.set('LayoutTemplate','PDocAppointment');
			return LayoutTemplates[3];		
		}
	},
	LayoutTemplate : function () {
		return  Session.get('LayoutTemplate');
	}
});

				Template.SideMenu.events({
					'click paper-item': function (event) {
						console.log(Template.instance().$('iron-collapse')[0]);
						event.stopPropagation();
						Template.instance().$('iron-collapse')[0].toggle();
					},
				});

				Template.SubSideMenu.events({
					'click paper-item': function (event) {
						event.stopPropagation();
						console.log(this);
						Session.set('LayoutTemplate',this.name);
					},
				});