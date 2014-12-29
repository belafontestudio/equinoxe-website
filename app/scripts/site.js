$(document).ready(function() {

    $('div#hslide1').fadeIn(3000);
    $('a.item').each(function(){
        $(this).hover(function(e){
            var id = e.target.id;
            var target = id.slice(-1);
            hideSlides(target);

        });
    });
    

    $('#onepage').fullpage({
        menu: '#anchor-menu',
        anchors:['landing','yacht-charter', 'sale-purchase','expeditions', 'bareboat', 'heritage'],
        resize: false,
        autoScrolling: true,
        scrollOverflow: true,
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

function hideSlides(target){
        var counter = 1;
       
        $('div.hslide').each(function(){
            if (counter != target){
                $(this).fadeOut(1000);
                 console.log(target);
            }else{
                $(this).fadeIn(1000);
                console.log("ok"+target);
            }
            
            counter++;
        });
    }

