// $('.scrollto a').on('click', function () {

//     let href = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 370,   // по умолчанию «400» 
//         easing: "linear" // по умолчанию «swing» 
//     });

//     return false;
// });

// ========




// $(document).ready(function(){
//  $('.your-class').slick({
//       infinite: true,
//       dots: true,
//       slidesToShow: 3,
//       slidesToScroll: 1
//  });
//     });

// function showImg(event)
// {
//     event = event || window.event; // получаем объект события
//     let iconImg = event.Target || event.srcElement; // определяем текущий объект
//     if (iconImg.tagName == "IMG"){ // если тип элемента - изображение, то
//         document.getElementById("#bigImg").src = iconImg.getAttribute('src');  // меняем значение src у элемента с id="bigImg" на src текущего объекта 
//     }
// } 


// // ==modal is worked
// $('.diva1').hover(function(){
// 	$('.diva2').addClass('hovered');
// }, function() {
// 	$('.diva2').removeClass('hovered');
// });

// ==modal is worked
$('.clothes').hover(function(){
	$('.modal-douter').addClass('is-active');
}, function() {
	$('.modal-douter').removeClass('is-active');
});
// =
$('.modal-douter.is-active').hover(function(){
	$('.modal-douter').addClass('is-active');
}, function() {
	$('.modal-douter').removeClass('is-active');
});




// ==// ==modal is worked
$('.clothes').click(function(){
	$('.modal-douter').addClass('is-active');
}, function() {
	$('.modal-douter').removeClass('is-active');
});
// =
$('.modal-douter.is-active').hover(function(){
	$('.modal-douter').addClass('is-active');
}, function() {
	$('.modal-douter').removeClass('is-active');
});

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
    $('.mobile-bar').toggleClass('is-deactivate');
})