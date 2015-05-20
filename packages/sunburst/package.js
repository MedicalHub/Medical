Package.describe({
	summary: "Package for Sunburst.",
	version: '1.0.0'
});


Package.onUse(function (api, where) {
	api.use(['underscore', 'd3', 'jquery', 'templating']);
	api.addFiles([
		 'client/js/ReactiveSunburst.js'
		, 'client/js/ReactiveSunburstTemplate.html'
		, 'client/js/ReactiveSunburstTemplate.js'
		//,'client/js/sunburst.js'
  ], 'client');
});