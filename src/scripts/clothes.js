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
