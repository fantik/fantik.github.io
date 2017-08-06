$(document).ready(function() {
    
    //    GAMBURGER_MENU
    
     $(".top_mnu_btn").click(function(){
        $(".top_menu_list").slideToggle();
    });
    
     $(".topl_btn").click(function(){
        $("ul.top_line_nav").slideToggle();
    });
     //    GAMBURGER_MENU FOOTER
    
     $("button.footer_btn.fb1").click(function(){
        $("ul.footer_list.fl1").slideToggle();
    });

    $("button.footer_btn.fb2").click(function(){
        $("ul.footer_list.fl2").slideToggle();
    });
    
    $("button.footer_btn.fb3").click(function(){
        $("ul.footer_list.fl3").slideToggle();
    });
//------Baner_slider_icon------
    
    
$('ul.icon_preview').delegate('li:not(.current)', 'click', function() {
        $(this).addClass('current').siblings().removeClass('current')
            .parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
    });
    
$('ul.footer_list').delegate('li:not(.current)', 'click', function() {

    $(this).addClass('current').siblings().removeClass('current')
            .parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
    });
//    -----NAVBAR-------
    
    $(".menu_list").click(function(){
        $(this).children(".drop_menu").slideToggle();
    });
    
 
	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
//	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
//	$("a.scroll").click(function() {
//		$.scrollTo($(".div"), 800, {
//			offset: -90
//		});
//	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 3
      	});


	
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});