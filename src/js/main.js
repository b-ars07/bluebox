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
    
    var mySwiper = new Swiper ('.main-slider', {
      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: auto,
      loop: true,
    
  })        
});




