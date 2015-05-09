Package.describe({
	summary: "Package for User Management.",
	version: '1.0.0'
});


Package.on_use(function (api, where) {
	api.export(['Appointments', 'Notifications', 'AppointmentSchema', 'NotiSchema']);
	api.use(['userman', 'accounts-base', 'accounts-password', 'aldeed:simple-schema', 'aldeed:collection2', 'aldeed:autoform', 'mongo', 'underscore']);
	api.add_files([
  'common/js/collection.js'
  ]);
	api.add_files([
  'client/js/schemes.js'
  , 'client/js/autoform.js'
  ], 'client');
	api.add_files([
  'server/js/schemes/schemes.js'
  , 'server/js/security/publication.js'
  ], 'server');

});