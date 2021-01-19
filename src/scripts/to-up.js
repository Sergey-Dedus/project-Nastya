$('.clothes').mouseenter(function(){
    $('.modal-douter').addClass('is-active');
})
// ===
$('.modal-douter .is-active').mouseleave(function(){
    $('.modal-douter').removeClass('is-active');
})

// setTimeout(function () {
// $('.clothes').hover(function(){
// 	$('.modal-douter').addClass('is-active');
// }, function() {
// 	$('.modal-douter').removeClass('is-active');
// });
// }, 3000); // время в мс


// ===================================================
// $('.clothes').hover(function(){
// 	$('.modal-douter').addClass('is-active');
// }, function() {
// 	$('.modal-douter').removeClass('is-active');
// });
// ''''''''''''''''''''''''''''''''''''''''''''''''''''
// $('.clothes').hover(function(){
// 	$('.modal-douter').addClass('is-active');
// });



$('.modal-douter.is-active').hover(function(){
	// $('.modal-douter').addClass('is-active');
}, function() {
	$('.modal-douter').removeClass('is-active');
});
// '''''''''''''''''''''''''''''''''''''''''''''''''''''


// ==

// $(document).ready(function(){
//   $('a').on('click', function(e){
//     e.preventDefault();
//   });
    
//   $('.clothes').hover(function () {
//      clearTimeout($.data(this,'timer'));
//      $(".modal-douter.is-active").stop(true,true).slideDown(200);
//   }, function () {
//     $.data(".modal-douter.is-active",'timer', setTimeout($.proxy(function() {
//       $(".modal-douter.is-active",this).stop(true,true).slideUp(200);
//     }, this), 100));
//   });













// ==// ==modal is worked
// $('.clothes').click(function(){
// 	$('.modal-douter').addClass('is-active');
// }, function() {
// 	$('.modal-douter').removeClass('is-active');
// });
// // =
// $('.modal-douter.is-active').hover(function(){
// 	$('.modal-douter').addClass('is-active');
// }, function() {
// 	$('.modal-douter').removeClass('is-active');
// });

// ==
// $('.header-laptop__bar-mobile').click(function () {
//     $('.top-banner').addClass('is-deactivate');
// });

// =============================================
// $(document).ready(function(){
//     $(".header-laptop__bar-mobile").click(function () {
//         if ($(".mobile-bar").hasClass(".is-deactivate")) {
//             $(".mobile-bar").removeClass(".is-deactivate")
//         } else {
//             $(".mobile-bar").addClass(".is-deactivate")
//         }
//     });

$('.header-laptop__bar-mobile').on('click', function(){
    $('.mobile-bar').toggleClass('is-activate');
})