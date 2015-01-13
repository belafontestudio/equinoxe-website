

//Resize
$( window ).resize(function() {

  $.modal.resize();
  if($(".fullpage-wrapper")[0]){
    $.fn.fullpage.reBuild();
  }
  centerImagesInGrid();
});


var imgLoad = imagesLoaded( 'body' );

imgLoad.on( 'done', function( instance ) {
  $('.img-holder').imageScroll({coverRatio: 0.8,extraHeight: 0});
  centerImagesInGrid();
  
});


enquire.register("screen and (max-width:480px)", {

    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
        console.log("match mobile");
        checkPage("mobile");
    },
    unmatch : function() {
        console.log("unmatch mobile");
        if($(".fullpage-wrapper")[0]){
          $.fn.fullpage.destroy('all');
        }
    }
      
});
enquire.register("screen and (min-width: 480px)", {
    match : function() {
        console.log("match web");
        checkPage("web"); 
    },  
    unmatch : function() {
        console.log("unmatch web");
        if($(".fullpage-wrapper")[0]){
         $.fn.fullpage.destroy('all');
        }
    }
});

function filterMenu(){
    $("a.filter").each(function(){
        $(this).click(function(e){
            e.stopPropagation();
            var id = $(this).attr('id');
            var target = id.slice(-1);
            activeFS(target);
            activeLI(target);
            e.preventDefault();
            $("div.filter-opened-section").slideDown();
        });
    });
}
function activeFS(target){
    var counter = 1;

        $('section.filter-hide').each(function(){
            if (counter != target){
                $(this).fadeOut(0);
                 
            }else{
                $(this).delay(500).fadeIn(1000);
                
            }
            
            counter++;
        });
}
function activeLI(target){
    var counter = 1;

        $('a.filter').each(function(){
            if (counter != target){
                $(this).parent().removeClass("active");
                 
            }else{
                $(this).parent().addClass("active");
                
            }
            
            counter++;
        });
};
function guestSlider(){
    $( "#slider-guest" ).slider({
      range: true,
      min: 1,
      max: 15,
      step: 1,
      values: [ 1, 15],
      slide: function( event, ui ) {
        $( "p.min-guest" ).text( ui.values[ 0 ] + "guests" );
        $( "p.max-guest" ).text( ui.values[ 1 ] + "guests");

      }
    });
    $( "p.min-guest" ).text( $( "#slider-guest" ).slider( "values", 0 )+ "guests");
    $( "p.max-guest" ).text( $( "#slider-guest" ).slider( "values", 1 )+ "guests");
}
function rangeSlider(){
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      step: 5,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( "p.min-price" ).text( "€" + ui.values[ 0 ] + "k" );
        $( "p.max-price" ).text( "€" + ui.values[ 1 ] + "k");

      }
    });
    $( "p.min-price" ).text( "€" + $( "#slider-range" ).slider( "values", 0 )+ "k");
    $( "p.max-price" ).text( "€" + $( "#slider-range" ).slider( "values", 1 )+ "k");
}
$(document).ready(function() {

    


    filterMenu();
    rangeSlider();
    guestSlider();
    $( "#slider-single" ).slider({
         min: 0,
         max: 2,
         step: 1,
         slide: function( event, ui ) {
          switch (ui.value){
            case 0:
              $("#filter-yacht").fadeIn(1000);
              $("#filter-super-yacht").fadeOut(400);
              $("#filter-mega-yacht").fadeOut(400);
            break;
            case 1:
              $("#filter-yacht").fadeOut(400);
              $("#filter-super-yacht").fadeIn(1000);
              $("#filter-mega-yacht").fadeOut(400);
            break;
            case 2:
              $("#filter-yacht").fadeOut(400);
              $("#filter-super-yacht").fadeOut(400);
              $("#filter-mega-yacht").fadeIn(1000);
            break;
          }
          
          

        }
       });

    $('#enquire-modal').on($.modal.OPEN, function(event, modal) {
        
        if($(".fullpage-wrapper")[0]){
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        }
        $.sidr("close");
    });
    $('#enquire-modal').on($.modal.CLOSE, function(event, modal) {
        if($(".fullpage-wrapper")[0]){
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        }
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
function hasFullPage(page){
    $(arrayFullPage).each(function(){

    });
}
function webSlide(){
    $("#onepage").load("/pages/slides/yacht_size_web.html",function(data){ 
      homeSlides();
      createLanding();
      var citymap = {};
    citymap['chicago'] = {
      center: new google.maps.LatLng(41.878113, -87.629798),
      text: new google.maps.LatLng(43.328113, -87.629798),
      population: 2714856,
      name: "1"
    };
    citymap['newyork'] = {
      center: new google.maps.LatLng(40.714352, -74.005973),
      text: new google.maps.LatLng(42.164352, -74.005973),
      population: 8405837,
      name: "6"
    };
    citymap['losangeles'] = {
      center: new google.maps.LatLng(34.052234, -118.243684),
      text: new google.maps.LatLng(35.502234, -118.243684),
      population: 3857799,
      name: "3"
    };
    citymap['vancouver'] = {
      center: new google.maps.LatLng(49.25, -123.1),
      text: new google.maps.LatLng(51, -123.1),
      population: 603502,
      name: "13"
    };

    var cityCircle;

    google.maps.event.addDomListener(window, 'load', init);
    var map;
    function init() {
          var mapOptions = {
                center: new google.maps.LatLng(40.714352, -74.005973),
                zoom: 3,
                zoomControl: false,
                disableDoubleClickZoom: true,
                mapTypeControl: false,
                scaleControl: false,
                scrollwheel: false,
                panControl: false,
                streetViewControl: false,
                draggable : true,
                overviewMapControl: false,
                overviewMapControlOptions: {
                opened: false,
          },
          mapTypeId: google.maps.MapTypeId.SATELLITE,
    }
    var mapElement = document.getElementById('charter-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [];
    // Construct the circle for each value in citymap.
    // Note: We scale the area of the circle based on the population.
    for (var city in citymap) {
          var mapLabel = new MapLabel({
               text: citymap[city].name,
               position: citymap[city].text,
               map: map,
               fontSize:26,
               fontColor: "#F4BB3B",
               strokeWeight: 0,
               fontFamily: "Alegreya Sans",
               align: 'center'
             });
          var populationOptions = {
                strokeColor: '#F4BB3B',
                strokeOpacity: 1,
                strokeWeight: 5,
                fillColor: '#F4BB3B',
                fillOpacity: 0,
                map: map,
                center: citymap[city].center,
                radius: Math.sqrt(citymap[city].population) * 500
          };
          // Add the circle for this city to the map.
          cityCircle = new google.maps.Circle(populationOptions);
    }

    for (i = 0; i < locations.length; i++) {
          if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
          if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
          if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
          if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
          if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
          marker = new google.maps.Marker({
                icon: markericon,
                position: new google.maps.LatLng(locations[i][5], locations[i][6]),
                map: map,
                title: locations[i][0],
                desc: description,
                tel: telephone,
                email: email,
                web: web
          });
          link = '';     
          }
    }
    });

}
function mobileSlide(){
    $("#onepage").load("/pages/slides/yacht_size_mobile.html",function(data){ 
        homeSlides();
        createLanding();
    });
}

      
function checkPage(size){
    var pathArray = window.location.pathname.split( '/' );
    if (pathArray[2] == "landing.html"){
        
        if (size == "web"){
            webSlide();
        }else if (size == "mobile"){
           mobileSlide(); 
        }
        
        

    }else if(pathArray[2] == "single_yacht.html"){
        $('#onepage').fullpage({
        
            resize: false,
            autoScrolling: false,
            scrollOverflow: true,
            scrollBar: false,
            responsive: 480,
            loopTop: false,
            loopHorizontal: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom'
        

        });
    }else if(pathArray[2] == "single_expedition.html"){
        $('#onepage').fullpage({
        
            resize: false,
            autoScrolling: false,
            scrollOverflow: true,
            scrollBar: false,
            responsive: 480,
            loopTop: false,
            loopHorizontal: false,
            slidesNavigation: true,
            slidesNavPosition: 'bottom'
        

        });
    }else{
        $("html").css("overflow","visible");
        $("body").css("overflow","visible");
        
    }

}
function hideStatements(target){
    var counter = 1;

        $('p.statement').each(function(){
            if (counter != target){
                $(this).fadeOut(0);
                 
            }else{
                $(this).fadeIn(1000);
                
            }
            
            counter++;
        });
};

function centerImagesInGrid(){
    height = $(window).height();
    var container_width = $('ul#latest-yachts-imgbackground li').width();
    $('ul#latest-yachts-imgbackground li img').height(height);

    $('ul#latest-yachts-imgbackground li img').each(function(){
        var width = $(this).width();
        $(this).css("left",-(width*0.5));
        $(this).css("marginLeft", container_width*0.5);

    });
}

function homeSlides(){
    $('div#hslide1').fadeIn(1000);
    $('p#statement1').fadeIn(1000);
    $('a#m1').addClass("active");

    $('a.item').each(function(){
        $(this).hover(function(e){
            var id = e.target.id;
            var target = id.slice(-1);
            hideStatements(target);
            hideSlides(target);
            activeItem(target);

        });
    });
    setTimeout(function() {
          
      }, 5000);
}
function activeItem(target){
    var counter = 1;

        $('a.item').each(function(){
            if (counter != target){
                $(this).removeClass("active");
                 
            }else{
                $(this).addClass("active");
                
            }
            
            counter++;
        });
};
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

