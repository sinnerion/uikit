$(document).ready(function () {
  $('.header-nav').slideUp();
  $('.page-language_list').slideUp();

  // Header navs
  $('.header-login').hover(function () {
    $('.header-nav').slideDown(50);
  });
  $('.header-nav').mouseleave(function () {
    $('.header-nav').slideUp(40);
  });
  $('.page-language_current').click(function () {
    $('.page-language_list').slideDown(60);
  });
  $('.page-language_list').mouseleave(function () {
    $('.page-language_list').slideUp(50);
  });

  // Header language changer
  $('.page-language_list a').click(function () {
    $('.page-language_current').html($(this).html());
  });

  // Sidebar nav
  $('.main-sidebar_more').click(function () {
    $('.main-sidebar_counter-txt').toggle();
    $('.main-sidebar').toggleClass('active-sidebar');
    $('.main-sidebar li').toggleClass('active-sidebar');
  });
  $(document).scroll(function () {
    var previousScroll = 0;
    var currentScroll = $(this).scrollTop();
    if ($(window).width() < 768) {
      if (currentScroll > previousScroll) {
        $('.main-sidebar_nav').css('top', '-250px');
        $('.main-sidebar_more').css({
          'position': 'absolute',
          'top': '0',
          'line-height': '34px'
      });
      } else {
        $('.main-sidebar_nav').css('top', '60px');
        $('.main-sidebar_more').css({
          'position': 'static',
          'line-height': '60px'
          // 'top': '70px'
        });
      }
    } else {
      if (currentScroll > previousScroll) {
        $('.main-sidebar_nav').css('top', '-35px');
      } else {
        $('.main-sidebar_nav').css('top', '30px');
      }
    }
  });
});