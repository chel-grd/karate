$(document).ready(function() {
	$("#webTitle").mouseenter( function() {
		$("#webTitle").addClass("highlight");
	}),
	$("#webTitle").mouseleave( function() {
		$("#webTitle").removeClass("highlight");
	});
});
