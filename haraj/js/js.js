
$(document).ready(function() {



    $( ".features ul  li").each(function( index ) {
        $(this).attr('data-before','0'+($( this ).index()+1))
    })



    var prev = 0;
    var $window = $(window);
    var nav = $('.navbar');
    var collapse = $('.navbar-collapse');

    if($(window).scrollTop()>0){
        nav.toggleClass('scrolled');
    }else if($window.width()<=764 && $window.scrollTop()==0) {
        collapse.addClass('bg-app');

    }
        $window.on('scroll', function(){
            var scrollTop = $window.scrollTop();
            nav.toggleClass('scrolled', scrollTop > prev);
            collapse.removeClass('bg-app');
          if($window.width()<=764 && $window.scrollTop()==0) {
                collapse.addClass('bg-app');

            }
        });

    $('nav li a').click(function(){
        $('html , body').animate({scrollTop: $($(this).attr('href')).offset().top},500);
    })




    //
    //
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 5,
    //     spaceBetween: 50,
    //     loop:true,
    //     centeredSlides: true,
    //
    //     // init: false,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    //     breakpoints: {
    //         1024: {
    //             slidesPerView: 4,
    //             spaceBetween: 40,
    //         },
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 30,
    //         },
    //         640: {
    //             slidesPerView: 1,
    //             spaceBetween: 0,
    //         },
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 0,
    //         }
    //     }
    // });
    //
    //
    //




    var owl =$('#owl-demo-1').owlCarousel({
        loop:true,
        center:true,
        margin:0,
        autoWidth:false,
        autoplay:false,
        autoplayTimeout:5000,
        lazyLoad: true,
        // touchDrag  : false,
        // mouseDrag  : false,
        pagination : true,
        nav:true,
        navText: [
            "<i class=' carousel-control-prev-icon' aria-hidden='false'></i>",
            "<i class='carousel-control-next-icon' aria-hidden='false'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        },

    });

    owl.on('changed.owl.carousel', function(event) {
        $('.owl-stage-outer .active:first-child').addClass('scale');
    })
})



