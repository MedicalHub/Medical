Template.Avatar.onRendered(function () {
	window.viewer_ = new o3v.Viewer();

});
Template.Avatar.helpers({

	myArrayWithIndex: function () {
		array = _.clone(Avatar.findOne(Meteor.userId()));
		console.log(array);
		return _.map(array.layerOpacities, function (value, index) {
			return {
				index: index,
				value: value
			};
		});
	},

});
Template.Avatar.onCreated(function () {
	//this.subscribe('avatar');
});
Template.Avatar.events({
	'click button': function (e) {
		e.preventDefault();
		e.stopPropagation();
		Template.parentData(3).states[this.index].set = true;
		DvalidRVAr.set(false);
	},
	'click canvas': function (event) {
		//event.preventDefault();
		//event.stopImmediatePropagation();
		//console.log(event.target);
		console.log("canvas");
		//event.stopPropagation();
		Avatar.insert({
			_id: Meteor.userId()
		}, {
			$set: {
				layerOpacities: window.viewer_.layerOpacityManager_.layerOpacities_,
				camera: _.pick(window.viewer_.navigator_.camera, 'eye', 'target')
			}
		});
	}
});

Template.controller.rendered = function () {
	console.log("SLIDERRRRRRRRRR" + this.index);
	$(".slider" + this.index).noUiSlider({
		start: [0, 100],
		step: 1,
		connect: true,
		range: {
			'min': 0,
			'max': 100
		}
	});
};

Template.controller.events({
	'click div': function (event) {
		event.stopPropagation();
		//console.log(this);
		val = $(".slider" + this.index).val()[1] / 100;
		console.log(val);
		opacity = Avatar.findOne().layerOpacities;
		opacity[this.index] = val;
		Avatar.update({
			_id: "1"
		}, {
			$set: {
				layerOpacities: opacity
			}
		});
	}
});