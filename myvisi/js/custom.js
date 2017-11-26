$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	var makeOrder_btn = $('.makeorder_btn', '.main-wrapper');
	var makeOrder = $('#makeorder');
	var mainWrapper = $('.main-wrapper');

	$(makeOrder_btn).click(function() {
		$('#makeorder').addClass('show');
		$(mainWrapper).addClass('blur');
	})

	$('.close', makeOrder).click(function () {
		$('#makeorder').removeClass('show');
		$(mainWrapper).removeClass('blur');
	})


	
	/* components */

	// if($('.portslider').length) {
	// 	$('.portslider').slick({
	// 		dots: false,
	// 		infinite: true,
	// 		speed: 300,
	// 		slidesToShow: 1,
	// 		slidesToScroll: 1,
	// 		arrows: false
	// 	});
	// };

	/*
	

	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margon  : 10,
			padding  : 10
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	
	*/
	
	/* components */
	
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();		
	//$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);

// Animation

$(document).ready(function() {	
	$(".side-logo, .logo, .sideline__right, .sidebar, header, .makeorder-desktop").addClass("animate");

	function animateMenu($navs, hold) {
		$.each($navs, function(i, t){
	     var $this = $(t);
	     setTimeout(function(){ 
	     	$this.addClass("animate"); 	     	
	     	// if (i==$navs.length-1)
	     	// 	$this.closest('.active').addClass("animated");
	     	if (i==$navs.length-1) {	
	     		$this.hasClass('active') ? $this.addClass("animated") : $this.siblings('.active').addClass("animated");	     		
	     	}
	     }, i*hold);
		});	
	}

	function animate($navs, hold) {
		$.each($navs, function(i, t){
	     var $this = $(t);
	     setTimeout(function(){ $this.addClass("animate"); }, i*hold);
		});	
	}

	animateMenu($("footer nav > a"), 150);
	animate($(".sidebar .tumb"), 600);

	$('.makeorder-desktop').on('click', function() {
		$(this).css({'transform': 'translate(0%,80%)', 'opacity': '0', 'transition': 'all .2s'});
		$('.main-wrapper').css('filter', 'blur(5px)');
		$('#makeorder').addClass('show');
	});

	$('#makeorder .close').on('click', function() {
		$('.main-wrapper').css('filter', 'blur(0px)');
		$('#makeorder').removeClass('show');
		$('.makeorder-desktop').css({'transform': 'translate(0%,-35%)', 'opacity': '1', 'transition': 'all .2s'});
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel({
		loop: false,
		nav: false,
		items: 1,
		dots: true,				
		responsive: {
			0: {
				margin: 100
			},
			1600: {
				margin: -715				
			}
		}			
		// autoWidth: true,		
	});
	owl.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY > 0) {
			owl.trigger('next.owl');
		} else {
			owl.trigger('prev.owl');
		}
		e.preventDefault();
	});
});