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

  // Chat
  $('.chat-btn').click(function(){
    if($(window).width() <= 600) {
      $('.chat').css({
        'visibility': 'visible',
        'width': '35%'
      });
      $('.chat_close-btn').css('left', '-71px');
      $('.content-block').removeClass('uk-width-1-1').addClass('uk-width-1-2');
    } else {
      $('.chat').css({
        'visibility': 'visible',
        'width': '25%'
      });
      $('.chat_close-btn').css('left', '-71px');
      $('.content-block').removeClass('uk-width-1-1').addClass('uk-width-2-3');
    }
  });
  $('.chat_close-btn').click(function(){
    if($(window).width() <= 600) {
      $(this).css('left', '180');
      $('.chat').css({
        'width': '0',
        'visibility': 'hidden'
      });
      $('.content-block').removeClass('uk-width-1-2').addClass('uk-width-1-1');
    } else {
      $(this).css('left', '180');
      $('.chat').css({
        'width': '0',
        'visibility': 'hidden'
      });
      $('.content-block').removeClass('uk-width-2-3').addClass('uk-width-1-1');
    }

  });
  //---- Chat custom scroll
  $(".chat-content").mCustomScrollbar({
    theme:"light"
  });

  //$(document).scroll(function () {
  //  var previousScroll = 0;
  //  var currentScroll = $(this).scrollTop();
  //  if ($(window).width() < 768) {
  //    if (currentScroll > previousScroll) {
  //      $('.main-sidebar_nav').css('top', '-250px');
  //      $('.main-sidebar_more').css({
  //        'position': 'absolute',
  //        'top': '0',
  //        'line-height': '34px'
  //    });
  //    } else {
  //      $('.main-sidebar_nav').css('top', '60px');
  //      $('.main-sidebar_more').css({
  //        'position': 'static',
  //        'line-height': '60px'
  //        // 'top': '70px'
  //      });
  //    }
  //  } else {
  //    if (currentScroll > previousScroll) {
  //      $('.main-sidebar_nav').css('top', '-35px');
  //    } else {
  //      $('.main-sidebar_nav').css('top', '30px');
  //    }
  //  }
  //});
});