"use strict";

// ヘッダーメニューの背景色変更
$(window).scroll(function () {
  var scrollHeight = $(this).scrollTop();

  if (scrollHeight > 0) {
    $("#header").addClass("header--active");
  } else {
    $(".header").removeClass("header--active");
  }
}); // 画面いっぱいの高さ計算

var setFillHeight = function setFillHeight() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
};

window.addEventListener('resize', setFillHeight);
setFillHeight(); // トップへ戻る

$(function () {
  var pageTop = $("#page-top.page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      pageTop.show();
    } else {
      pageTop.hide();
    }
  });
}); // スライダー

$(function () {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    speed: 1000,
    dotsClass: "slider__dots"
  });
});