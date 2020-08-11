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

  //Табы
  var tabsItem = $(".tabs__item");
  var cards = $(".card");

  tabsItem.on("click", function () {
    var activeCard = $(this).attr("data-target");
    tabsItem.removeClass("tabs__item--active");
    cards.removeClass("card--active");
    $(activeCard).addClass("card--active");
    $(this).addClass("tabs__item--active");
  });
});
