$( window ).resize(function() {

  $.modal.resize();
});

$(document).ready(function() {
    checkPage()
    
    $('#enquire-modal').on($.modal.OPEN, function(event, modal) {
      $.fn.fullpage.setAllowScrolling(false);
      $.fn.fullpage.setKeyboardScrolling(false);
      
      $.sidr("close");
    });
    $('#enquire-modal').on($.modal.CLOSE, function(event, modal) {

      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    
    });

    $('div#hslide1').fadeIn(3000);
    $('a.item').each(function(){
        $(this).hover(function(e){
            var id = e.target.id;
            var target = id.slice(-1);
            hideSlides(target);

        });
    });
    

    
    height = $(window).height();
    var container_width = $('ul#latest-yachts-imgbackground li').width();
    $('ul#latest-yachts-imgbackground li img').height(height);

    $('ul#latest-yachts-imgbackground li img').each(function(){
        var width = $(this).width();
        $(this).css("left",-(width*0.5));
        $(this).css("marginLeft", container_width*0.5);

    });
    $('#simple-menu').sidr({
        displace: true,
    	onOpen : menuOpen,
    	onClose : menuClose
	});


    function menuOpen() {
    	var menu = $('a#simple-menu');
    	menu.addClass('hide');
		if (menu.hasClass('show')){
			menu.removeClass('show');
		}
        var hmenu = $('div#landing-menu div.center');
            
        if (!hmenu.hasClass('hide')){
            hmenu.addClass('hide');
        }
        if (hmenu.hasClass('show')){
            hmenu.removeClass('show');
        }
          
        
    };
    function menuClose() {
    	var menu = $('a#simple-menu');
    	menu.addClass('show');
    	if (menu.hasClass('hide')){
    		menu.removeClass('hide');
    	}
        var hmenu = $('div#landing-menu div.center');
            
        if (!hmenu.hasClass('show')){
            hmenu.addClass('show');
        }
        if (hmenu.hasClass('hide')){
            hmenu.removeClass('hide');
        }
    };

    $('a#closeMenu').click(function(){
    	$.sidr("close");
    });

});
function createLanding(){
    $('#onepage').fullpage({
        menu: '#anchor-menu',
        anchors:['landing','yacht-charter', 'sale-purchase','expeditions', 'bareboat', 'heritage'],
        resize: false,
        autoScrolling: true,
        scrollOverflow: true,
        scrollBar: false,
        responsive: 480,
        loopTop: false,
        loopHorizontal: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        afterLoad: function(anchorLink, index){
            var hmenu = $('div#landing-menu div.center')
            //using anchorLink
            
            
                if (!hmenu.hasClass('show')){
                    hmenu.addClass('show');
                }
                if (hmenu.hasClass('fast-hide')){
                    hmenu.removeClass('fast-hide');
                }
                
            
        },
        onLeave: function(index, nextIndex, direction){
            var hmenu = $('div#landing-menu div.center')
       
                hmenu.addClass('fast-hide');
                if (hmenu.hasClass('show')){
                    hmenu.removeClass('show');
                }
                
             
            
        }

    });
}

function checkPage(){
    var pathArray = window.location.pathname.split( '/' );
    if (pathArray[2] == "landing.html"){
        createLanding();
    }
}
function hideSlides(target){
        var counter = 1;
       
        $('div.hslide').each(function(){
            if (counter != target){
                $(this).fadeOut(1000);
                 
            }else{
                $(this).fadeIn(1000);
                
            }
            
            counter++;
        });
    }

