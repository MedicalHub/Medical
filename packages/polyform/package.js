Package.describe({
	summary: 'Add Autoform Polymer ',
	version: '1.0.6',
	git: 'https://github.com/ecwyne/meteor-polymer.git',
	name: 'akashdvd:polyform'
});

Package.onUse(function(api) {

	//api.use(['templating','aldeed:simple-schema'], 'client');
	api.use(['templating','aldeed:simple-schema'], 'client');
	api.export(['PolyRender','FlatObjectParser',],'client');
	api.addFiles(['PolyForm.html','PolyForm.js','PolyFlow.js','PolyMap.js','PolyRender.js','dataobject-parser.js'
		], 'client');
});
