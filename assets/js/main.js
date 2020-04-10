$(document).ready(function ($) {
    "use strict";

    // WOW Js Active
    new WOW().init();

    // ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    // Menu JQuery

    $(window).scroll(function () {
        var scrollSize = $(this).scrollTop();
        if (scrollSize < 50) {
            $('.navbar').css("background", "transparent");
            $('.navbar').css("box-shadow", "none");
        } else {
            $('.navbar').css("background", "#fff");
            $('.navbar').css("box-shadow", "0 0 10px 0 #9995");
        }
    });

    // $('li.nav-item').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });

}(jQuery));