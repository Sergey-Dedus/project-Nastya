

// ==modal is worked
$('.clothes').hover(function(){
	$('.modal-douter').addClass('is-active');
}, function() {
	$('.modal-douter').removeClass('is-active');
});

// =
$('.header-laptop__bar-mobile').on('click', function(){
    $('.mobile-bar').toggleClass('is-activate');
})