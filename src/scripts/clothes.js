// $(".clothes-menu").hide(); // скрываем выпадающее меню
// $(".clothes").hover(
//   function(){
//   $(".clothes-menu").stop().fadeToggle(300);} /* отбираем элемент списка, который содержит элемент с классом .submenu и добавляем ему функцию при наведении, которая показывает и скрывает выпадающее меню */
// );


// // $(".clothes-menu").hide(); // скрываем выпадающее меню
// // $(".five li:has('.submenu')").hover(
// //   function(){
// //   $(".five li ul").stop().fadeToggle(300);} /* отбираем элемент списка, который содержит элемент с классом .submenu и добавляем ему функцию при наведении, которая показывает и скрывает выпадающее меню */
// // );


// function hideMenu() {
//   $('.menu__dropdown').slideUp(700);
// }
// function showMenu() {
//   $('.menu__dropdown').slideDown(700);
// }
// $(document).ready(function() {
//   $(".clothes").on("mouseenter", showMenu);
//   $(".header-laptop__wrapper").on("mouseleave", hideMenu);
// });


function hideMenu() {
  $('.modal-2').slideUp(700);
}
function showMenu() {
  $('.modal-2').slideDown(700);
}
$(document).ready(function() {
  $(".clothes").on("mouseover", showMenu);
  $(".menu__title").on(" mouseleave", hideMenu); 
});
