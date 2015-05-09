//Meteor.publish('appointments', function(id) {  return Appointments.find({doctor_id:id});});
//Meteor.publish('notifications', function(id) { return Notifications.find({belongs_to:id});});
Meteor.publish('appointments', function () {
	console.log(this.userId);
	//Appointments.find({doctor_id:id});
	Appointments.find();
});

Meteor.publish('notifications', function () {
	console.log(this.userId);
	//Notifications.find({belongs_to:this.userId});
	Notifications.find();
});
