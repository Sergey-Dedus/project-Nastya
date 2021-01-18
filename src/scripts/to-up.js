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

let ic = document.querySelector(".select-img");
ic.addEventListener('click', function(event) {
     event = event || window.event; // получаем объект события
    let iconImg = event.Target || event.srcElement; // определяем текущий объект
    if (iconImg.tagName == "IMG"){ // если тип элемента - изображение, то
        document.getElementById("bigImg").src = iconImg.getAttribute('src');  // меняем значение src у элемента с id="bigImg" на src текущего объекта 
    }
});