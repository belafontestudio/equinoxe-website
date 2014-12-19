$(document).ready(function() {
    $('#onepage').fullpage();
    height = $(window).height();
    var container_width = $('ul#latest-yachts-imgbackground li').width();
    $('ul#latest-yachts-imgbackground li img').height(height);

    $('ul#latest-yachts-imgbackground li img').each(function(){
        var width = $(this).width();
        $(this).css("left",-(width*0.5));
        $(this).css("marginLeft", container_width*0.5);

    });
    $('#simple-menu').sidr({
    	onOpen : menuOpen,
    	onClose : menuClose
	});


    function menuOpen() {
    	var menu = $('a#simple-menu');
    	menu.addClass('hide');
		if (menu.hasClass('show')){
			menu.removeClass('show');
		}
    };
    function menuClose() {
    	var menu = $('a#simple-menu');
    	menu.addClass('show');
    	if (menu.hasClass('hide')){
    		menu.removeClass('hide');
    	}
    };

    $('a#closeMenu').click(function(){
    	$.sidr("close");
    });

});

