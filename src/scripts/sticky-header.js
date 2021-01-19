$(document).ready(function() {
    let stickyNavTop = $('.header-laptop').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop() >= stickyNavTop) {
            $('.header-laptop').addClass('fixed-header');
        } else {
            $('.header-laptop').removeClass('fixed-header');
        }
    });
});