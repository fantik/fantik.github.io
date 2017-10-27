$(document).ready(function() {

	$(".up, .animation_4").animated("fadeInDown", "fadeOutUp");
	$(".down, .animation_5").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("zoomIn", "zoomOut");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");

		function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};

	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
		$("input, select, textarea").jqBootstrapValidation();
		
		$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});
		$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});	
	
});