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
      clickable: true,
    },
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
  });

  var commentsSwiperSlide = $(".comments__swiper-container");
  commentsSwiperSlide.on("mouseover", function () {
    commentsSwiper.autoplay.stop();
  });
  commentsSwiperSlide.on("mouseout", function () {
    commentsSwiper.autoplay.start();
  });

  var historySwiper = new Swiper(".history__swiper-container", {
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 24,
    slidesPerGroup: 2,

    navigation: {
      nextEl: ".history__button-next",
      prevEl: ".history__button-prev",
      disabledClass: "history__button--disabled",
    },
    breakpoints: {
      720: {
        direction: "horizontal",
        spaceBetween: 18,
      },
    },
  });

  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  });
});
