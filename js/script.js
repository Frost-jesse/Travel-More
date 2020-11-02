$(document).ready(function() {
    $('#navBar').click(function() {
        $('ul.nav-list, .nav-bar').toggleClass('nav-open');
    });

    $('a[href^="#"]').click(function() {
        let anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 600);
    });
});