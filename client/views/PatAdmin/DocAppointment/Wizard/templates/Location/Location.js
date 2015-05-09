Meteor.startup(function () {
	GoogleMaps.load();
});

Template.Location.onCreated(function () {
	// We can use the `ready` callback to interact with the map API once the map is ready.
	GoogleMaps.ready('exampleMap', function (map) {
		//Add a marker to the map once it 's ready
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
		var populationOptions = {
			strokeColor: '#000000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FFFFFF',
			fillOpacity: 0.5,
			map: map.instance,
			center: new google.maps.LatLng(12.9342432, 77.70035),
			radius: Math.sqrt(8000) * 100
		};
		// Add the circle for this city to the map.
		cityCircle = new google.maps.Circle(populationOptions);
	});
});

Template.Location.onRendered(function () {
	// Use this.subscribe inside onCreated callback

});
Template.Location.helpers({
	exampleMapOptions: function () {
		// Make sure the maps API has loaded
		if (GoogleMaps.loaded()) {
			// Map initialization options
			return {

				center: new google.maps.LatLng(12.9342432, 77.70035),
				zoom: 12
			};
		}
	}
});
Template.Location.events({
	'click button': function (e) {
		e.preventDefault();
		e.stopPropagation();
		Template.parentData(3).states[this.index].set = true;
		DvalidRVAr.set(false);
	},
});