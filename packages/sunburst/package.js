Package.describe({
	summary: "Package for Sunburst.",
	version: '1.0.0'
});


Package.on_use(function (api, where) {
	//api.export(['ReactiveSunburstTemplate']);
	api.use(['underscore','d3','jquery','templating']);
	api.add_files([
		,'client/js/ReactiveSunburst.js'
		,'client/js/ReactiveSunburstTemplate.html'
		,'client/js/ReactiveSunburstTemplate.js'
		//,'client/js/sunburst.js'
  ], 'client');
});