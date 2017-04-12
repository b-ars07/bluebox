document.ready(function () {
    @@include('lib/lib.js')
    
    
    $('nav-item>a').on('click', function (evt) {
        evt.preventDefault();
        
        $('nav-item>a').removeClass('active-link');
        $(this).addClass('active-link');
    });
    
    
});




