jQuery(document).ready(function($) {
    $("#titulo-container").hide();
    $("#edificio").hide();
    $("#barra-inferior").hide();
    $("#barra-superior").hide();
    $('.carousel').fadeIn(500, function() {
        
        $("#edificio").slideDown(500, function() {
            $("#barra-inferior").fadeIn(500);
            $("#barra-superior").fadeIn(1000, function(){
                $("#titulo-container").fadeIn(3000);
            });
        });
    });    
    
    $('.scroll').click(function(){
        var id_part = $(this).attr('id');
        id_part = '#nav_' + id_part;
        $('html, body').animate({
            scrollTop: $(id_part).offset().top
        },1000);
    });

    jQuery(window).scroll(function() {
        var offset = $('#nav_amazonas').offset();
        if (jQuery(this).scrollTop() > (offset.top - 20)) {
           jQuery('.back-to-top').fadeIn(300);     
        } else {
            jQuery('.back-to-top').fadeOut(300);
        } 
    });
});

var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').slideDown('slow');
    

