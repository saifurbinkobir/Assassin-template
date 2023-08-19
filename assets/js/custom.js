$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: [
            "<i class='icofont-rounded-left'></i>", 
            "<i class='icofont-rounded-right'></i>"
        ]
    })
    );
  });