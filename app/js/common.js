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
    $('.chat').css({
      'visibility': 'visible',
      'width': '30%'
    });
    $('.content-block').css('width', '70%');
      $('.chat_close-btn').css('left', '-71px');
  });
  $('.chat_close-btn').click(function(){
    $('.content-block').css('width', '100%');
    $(this).css('left', '180');
    $('.chat').css({
      'width': '0',
      'visibility': 'hidden',
    });
  });
  //---- Chat custom scroll
  $(".chat-content").mCustomScrollbar({
    theme:"light"
  });
});