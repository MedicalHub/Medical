Package.describe({
	summary: "Package for Avatar.",
	version: '1.0.0'
});


Package.on_use(function (api, where) {
  api.export(['o3v','AViewer' ,'MODELS'], 'client');   //'MODELS'], 'client');
  api.export(['Symptom','Condition','Speciality','Avatar'], ['client','server']);  
  api.use(['mongo','underscore','aldeed:simple-schema','aldeed:collection2','tracker','jquery','mizzao:jquery-ui']);
  api.add_files(
  ['js/collection.js',
  ], ['client','server']); 
  api.add_files(
  ['js/security/publication.js',
  ], 'server'); 
  
  api.add_files(
  ['packed.js',
  'js/sync.js',
  ], 'client'); 
});
