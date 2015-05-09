Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
});
Meteor.publish('loggeddoctor', function () {
	console.log(this.userId+' loggeddoctor');
	//console.log(Doctor.findOne(this.userId));
	return Doctor.find(this.userId);

});
Meteor.publish('doclist', function () {
	console.log(this.userId+' doclist');
	//console.log(Doctor.findOne(this.userId));
	return Doctor.find();

});

Meteor.publish('loggedpatient', function () {
	console.log(this.userId+' loggedpatient');
	return Patient.find(this.userId);

});


