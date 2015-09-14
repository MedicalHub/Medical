Package.describe({
	summary: "Package for Appointment.",
	version: '1.0.0'
});


Package.on_use(function (api, where) {
	api.export(['Patient', 'Doctor', 'Files']); //Files need to be done
	api.export(['LoginSchema', 'DocSchema', 'PatSchema','Verification'], 'client');
	api.use(['accounts-base', 'accounts-password', 'accounts-facebook', 'accounts-google',
  'aldeed:simple-schema', 'aldeed:collection2', 'aldeed:autoform', 'mongo', 'underscore']);
	api.add_files([
  'client/js/schemas/doctor/schema.js'
  , 'client/js/accounts.js'
  , 'client/js/loginschema.js'
  , 'client/js/schemas/doctor/appointment.js'
  , 'client/js/schemas/doctor/calendar.js'
  , 'client/js/schemas/doctor/personal.js'
  , 'client/js/schemas/doctor/professional.js'
  , 'client/js/schemas/doctor/workplace.js'
  , 'client/js/schemas/patient/personal.js'
  ], 'client');
	//api.add_files([
	//'common/js/collections/collection.js'
	//]);
	api.add_files([
  'server/js/schemas/patcollection.js'
  , 'server/js/schemas/doccollection.js'
  , 'server/js/schemas/collection.js'
  , 'server/js/posts.js'
  , 'server/js/oauth.js'
  , 'server/js/security/publication.js'
  , 'server/js/account.js'
  ], 'server');
});