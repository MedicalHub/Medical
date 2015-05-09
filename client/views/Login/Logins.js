Template.Logins.rendered = function ( ) { 
	
	//   BIG SHOT THING
	
	
	Session.set('role', '');
	Session.set('diag', false);
	//////////////////////////////
	$("video").prop('muted', true); 
	$("video").hover(
	function(e) {
		e.preventDefault();
		$("video").prop('muted', false); 
		$(".video-hover").css({ opacity: 1.0 });
		$(".image-hover").css({ opacity: 0.0 });
	},
	function(e) {
		e.preventDefault();
		$("video").prop('muted', true); 
		$(".video-hover").css({ opacity: 0.2 });
		$(".image-hover").css({ opacity: 1 });
	});
	$(".image-hover").hover(
	function(e) {
		e.preventDefault();
		$("video").prop('muted', false); 
		$(".video-hover").css({ opacity: 1.0 });
		if (event.currentTarget.text == "Physician")
		$(".image-hover").css({ opacity: 0.0 });
	});
};

Template.Logins.events ({ 
	'click li a': function (event) {
		event.preventDefault();
		//event.stopPropagation();
		if (event.currentTarget.text == "Physician")
		{
			Session.set('role','phy');
		}
		else {
			Session.set('role','pat');
		}
	},
	'click button#diagnose': function (event) {
		event.preventDefault();
		Session.set('diag',true);
	},
	
});


