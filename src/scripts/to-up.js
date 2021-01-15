$('.scrollto a').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});

// ========


//  ==
//  $(document).ready(function(){
//     $('.your-class').slick();
//   });

// $(document).ready(function(){
//  $('.your-class').slick({
//       infinite: true,
//       dots: true,
//       slidesToShow: 3,
//       slidesToScroll: 1
//  });
//     });