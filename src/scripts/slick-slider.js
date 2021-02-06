$(document).ready(function () {
    $('.slider-area__slider-img').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000
    })


    $(".slider-area__slider-img").on("beforeChange", function(event, slick, currentSlide){
slick.$slides.find("h2, h3, .text-container__btn").removeClass("animate__fadeInRight")
});
$(".slider-area__slider-img").on("afterChange", function(event, slick, currentSlide){
slick.$slides.eq(currentSlide).find("h2, h3, .text-container__btn").addClass("animate__fadeInRight")
});
});




