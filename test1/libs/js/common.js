$(document).ready(function () {

 $('.top_mnu').delegate('a:not(.current)', 'click', function() {

    $(this).addClass('current').siblings().removeClass('current')
            .parents('div.section').find('div.box').hide().eq($(this).index()).fadeIn(150);
    });

 });