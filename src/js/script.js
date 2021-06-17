// ヘッダーメニューの背景色変更
$(window).scroll(function() {
  let scrollHeight = $(this).scrollTop();
  if ( scrollHeight > 0) {
    $("#header").addClass("header--active");
  } else {
    $(".header").removeClass("header--active");
  }
});

// 画面いっぱいの高さ計算
const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setFillHeight);
setFillHeight();

// トップへ戻る
$(function() {
  const pageTop = $("#page-top.page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      pageTop.show();
    } else {
      pageTop.hide();
    }
  });
});


// スライダー
$(function () {
  $(".slider").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    speed: 1000,
    dotsClass: "slider__dots",
  });
});
