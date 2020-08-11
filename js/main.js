$(document).ready(function () {
  //Модальное окно
  var menuButton = $(".menu-button");
  var closeMenuButton = $(".header-right__button");

  closeMenuButton.on("click", function () {
    $(".header-right").removeClass("header-right--visible");
  });
  menuButton.on("click", function () {
    $(".header-right").addClass("header-right--visible");
  });
});
