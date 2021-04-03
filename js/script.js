$(function() {

  //ハンバーガーメニュー開閉
  $('.ham').on('click', function() {
    $('.header-sp-nav, .ham, .ham-line1, .ham-line2, .ham-line3').toggleClass('open');
  });

  //ハンバーガーメニューのナビリンククリック後自動で閉じる
  $('.header-sp-menu-list a').on('click', function () {
    $('.ham').click();
  });

});
