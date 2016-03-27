 jQuery(document).ready(function($) {
    $('.carousel').hide();
    $('.mapa').addClass('.transparent');
    $('.carousel').fadeIn(4000).ready(function(){$('.mapa').fadeIn(1000);})

    $('.scroll').click(function(){
        var id_part = $(this).attr('id');
        id_part = '#nav_' + id_part;
        $('html, body').animate({
            scrollTop: $(id_part).offset().top
        },1000);
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
    

