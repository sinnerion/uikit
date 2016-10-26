$(document).ready(function(){
    $('.header-nav').slideUp();
    $('.header-login').hover(function(){
        $('.header-nav').slideDown(50);
    });
    $('.header-nav').mouseleave(function(){
        $('.header-nav').slideUp(40);
    });

    $('.main-sidebar_more').click(function(){
        $('.main-sidebar_counter-txt').toggle();
        $('.main-sidebar').toggleClass('active-sidebar');
        $('.main-sidebar li').toggleClass('active-sidebar');
    });

    $(document).scroll(function () {
        var previousScroll = 0;
        var currentScroll = $(this).scrollTop();
        if (currentScroll > previousScroll) {
            $('.main-sidebar').css('top', '10px');
        } else {
            $('.main-sidebar').css('top', '70px');
        }
    });
});