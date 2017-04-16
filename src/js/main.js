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

    var swiper1 = new Swiper('.main-slider', {
        // Navigation arrows
        nextButton: '.main-slider .swiper-button-next',
        prevButton: '.main-slider .swiper-button-prev',
        loop: true,

    });

    $('.fancybox').fancybox();
    
     var swiper2 = new Swiper('.clients-slider', {
        nextButton: '.clients-slider .swiper-button-next',
        prevButton: '.clients-slider .swiper-button-prev',
        slidesPerView: 4,
    });
    
});
