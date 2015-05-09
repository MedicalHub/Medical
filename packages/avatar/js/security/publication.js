Meteor.publish('avatar', function () {
	console.log(this.userId+' avatar');
	//console.log(Doctor.findOne(this.userId));
	return Avatar.find();

});
