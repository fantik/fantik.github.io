$(document).ready(function() {

	$(".top_mnu_list li a").click(function() {
		$(".top_mnu_list li a").removeClass("active");
		$(this).addClass("active");
	});

	$(".animation_1").animated("fadeInLeft");
	$(".animation_2").animated("fadeInDown");
	$(".animation_3").animated("fadeInUp");
	$(".animation_4").animated("fadeInRight");
	$(".animation_5").animated("zoomIn");

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu_list").is(":visible")) {
			$(".top_mnu_list").fadeOut(600);
			$(".top_mnu_list li a").removeClass("fadeInUp animated");
		} else {
			$(".top_mnu_list").fadeIn(600);
			$(".top_mnu_list li a").addClass("fadeInUp animated");
			$(".top_mnu_list, .top_mnu_list li").css("display","block");
		};
	});
	$(".top_mnu_list li a").click(function() {
		$(".top_mnu_list").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});

function PopUpShow(){
	$("#popup1").show();
}
function PopUpHide(){
	$("#popup1").hide();
}
function PopUpShow2(){
	$("#popup2").show();
	console.log("rf");
}
function PopUpHide2(){
	$("#popup2").hide();
}