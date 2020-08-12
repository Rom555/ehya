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

  //Слайдер
  var commentsSwiper = new Swiper(".comments__swiper-container", {
    loop: true,
    spaceBetween: 60,
    centeredSlides: true,
    pagination: {
      el: ".comments__swiper-pagination",
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
      bulletClass: "comments__swiper-pagination-bullet",
      bulletActiveClass: "comments__swiper-pagination-bullet-active",
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  });

  var commentsSwiperSlide = $(".comments__swiper-slide");
  if ($(document).width() > 768) {
    commentsSwiperSlide.on("mouseover", function () {
      commentsSwiper.autoplay.stop();
    });
    commentsSwiperSlide.on("mouseout", function () {
      commentsSwiper.autoplay.start();
    });
  }
});
