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
    return false;
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });



  //宿泊予約モーダル(SP)
  $('.js-modal-sp-open').on('click', function () {
    $('.js-modal-sp').fadeIn();

    //ハンバーガーメニューをクリックしていても、宿泊予約がクリックされるとメニューが閉じる
    $('.header-sp-menu, .ham, .ham-line1, .ham-line2, .ham-line3').removeClass('open');
    return false;
  });
  $('.js-modal-sp-close').on('click', function () {
    $('.js-modal-sp').fadeOut();
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

});
