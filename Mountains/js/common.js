$(document).ready(function() {

	function heightDetect() {
	$(".main_head").css("height", $(window).height());
};
heightDetect();
$(window).resize(function() {
	heightDetect();
});

$(window).load(function() {
   $(".loader_inner").fadeOut();
   $(".loader").delay(400).fadeOut("slow");
});

$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});

$(".top_mnu ul a").click(function() {
	$(".top_mnu").fadeOut(600);
	$(".sandwich").toggleClass("active");
});

$(".toggle_mnu").click(function() {
	if ($(".top_mnu").is(":visible")) {
		$(".top_text").removeClass("h_opacity")
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated");
	} else {
	$(".top_text").addClass("h_opacity")
	$(".top_mnu").fadeIn(600);
	$(".top_mnu li a").addClass("fadeInUp animated");
};
	});
	
	$(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });


});