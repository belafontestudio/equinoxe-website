$(document).ready(function() {
    $('#onepage').fullpage();
    height = $(window).height();
    $('ul#latest-yachts-imgbackground li img').height(height);
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

