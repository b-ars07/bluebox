@@include('lib/lib.js')
$(document).ready(function () {


    //делаем ссылку меню активной при нажатии
    $('nav-item>a').on('click', function (evt) {
        evt.preventDefault();

        $('nav-item>a').removeClass('active-link');
        $(this).addClass('active-link');
    });

    $('.submenu-link').on('click', function (evt) {
        evt.preventDefault();

        $('.submenu-link').removeClass('submenu-link_active');
        $(this).addClass('submenu-link_active');
    });


    $('.fancybox').fancybox();

    var owl = $(".main-slider");
    var owl2 = $(".clients-slider");
    
    owl.owlCarousel({
        loop: true,
        items: 1,
        dots: false,
    });
    owl2.owlCarousel({
        loop: true,
        items: 4,
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            500:{
                items:2,
            },
            700:{
                items:3,
            },
            900: {
                items: 4,
            }
        }
    });
    
    //custom navigation owl
    $('.slider .arrow-prev').on('click', function (evt) {
        evt.preventDefault();
        
        owl.trigger('prev.owl.carousel');
    });
    $('.slider .arrow-next').on('click', function (evt) {
        evt.preventDefault();
        
        owl.trigger('next.owl.carousel');
    });
    
    $('.clients .arrow-prev').on('click', function (evt) {
        evt.preventDefault();
        
        owl2.trigger('prev.owl.carousel');
    });
    $('.clients .arrow-next').on('click', function (evt) {
        evt.preventDefault();
        
        owl2.trigger('next.owl.carousel');
    });
});
