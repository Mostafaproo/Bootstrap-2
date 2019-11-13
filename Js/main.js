/* global $, window */

$(function() {
    'use strict';

    $(window).resize(function() {

        //Adjust Slider Height

        var WinH = $(window).height(),
            UpperH = $('.upper-bar').innerHeight(),
            NavH = $('.navbar').innerHeight();

        $('.slider, .carousel-item').height(WinH - (UpperH + NavH));

    });

    //Adjust Slider Height

    var WinH = $(window).height(),
        UpperH = $('.upper-bar').innerHeight(),
        NavH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(WinH - (UpperH + NavH));

    //Featured Work Shfulle
    $('.featured-work ul li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'All') {
            $('.shuffle-images .col-md-3').css('opacity', 1);

        } else {
            $('.shuffle-images .col-md-3').css('opacity', .5);
            $($(this).data('class')).parent().css('opacity', 1)
        }
    });

});