SimpleSchema.debug = true;

cameraSchema= {};
cameraSchema.camera =  new SimpleSchema({
	eye: 			{ type  : [Number], 			decimal  : true        	}, 
	target:			{ type  : [Number], 			decimal  : true      	}, 
});

Avatar = new Mongo.Collection("avatar");
Avatar.attachSchema(new SimpleSchema({
	layerOpacities:	{ type  : [Number], 			decimal  : true     	}, 
    camera : 		{ type : cameraSchema.camera , 	optional: true     		},
}));
 
