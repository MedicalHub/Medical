Template.ReactiveSunburstTemplate.helpers({
	id: function () {
		return this.options.id;
	}
});

Template.ReactiveSunburstTemplate.onRendered(function () {
	var data = this.data;
	console.info(data);
	var sunburst = new ReactiveSunburst(data.options);
	this.autorun(function () {
		sunburst.update();
		sunburst.autorunFunctions();
	});
});