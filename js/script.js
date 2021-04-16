$(function () {

  //ハンバーガーメニュー開閉
  $('.ham').on('click', function () {
    $('.header-sp-menu, .ham, .ham-line1, .ham-line2, .ham-line3').toggleClass('open');
  });

  //ハンバーガーメニューのナビリンククリック後自動で閉じる
  $('.header-sp-menu-list a').on('click', function () {
    $('.ham').click();
  });

  //スクロールしたらヘッダーが変わる
  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('scroll-nav', window.scrollY > 0);
  });

  //宿泊予約モーダル(PC)
  $('.js-modal-open').on('click', function () {
    $('.js-modal').fadeIn();
    $("html,body").css("overflow", "hidden");//背景固定
    return false;
  });

  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    $("html,body").removeAttr("style");//背景固定解除
    return false;
  });



  //宿泊予約モーダル(SP)
  $('.js-modal-sp-open').on('click', function () {
    $('.js-modal-sp').fadeIn();
    $("html,body").css("overflow", "hidden");//背景固定

    //ハンバーガーメニューをクリックしていても、宿泊予約がクリックされるとメニューが閉じる
    $('.header-sp-menu, .ham, .ham-line1, .ham-line2, .ham-line3').removeClass('open');
    return false;
  });

  $('.js-modal-sp-close').on('click', function () {
    $('.js-modal-sp').fadeOut();
    $("html,body").removeAttr("style");//背景固定解除
    return false;
  });
  //しかし、.formをクリックでキャンセルさせる
  $('form').on('click', function (e) {
    e.stopPropagation();
  });

  // flatpickr
  var calendar = document.getElementById('calendar');
  var fp = flatpickr(calendar, {
    dateFormat: 'Y-n-j(l)',
    mode: 'range',
    locale: "ja",
    minDate: "today"
  });

  //タブ
  $('.news-tab li').click(function() {
    var index = $('.news-tab li').index(this);
    $('.news-tab li').removeClass('active');
    $(this).addClass('active');
    $('.news-contents ul').removeClass('show').eq(index).addClass('show');
  });

  //Aos
  AOS.init({
    easing: 'ease-in-out-sine',
    once: false,
  });


  //下層ページのタイトルがfade
  $(window).scroll(function () {
    // クラスを追加するwindowの位置を設定
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;

    // eachでliを順番に処理
    $(".fade").each(function (i) {
      if (effectPos > $(this).offset().top) {
        var that = this;

        // 0.2s毎にずれて表示
        setTimeout(function () {
          $(that).addClass("fadein");
        }, 200 * i);
      }
    });
  });


});
