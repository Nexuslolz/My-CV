$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        autoplay: true,
        touchThreshold: 500,
        waitForAnimate: false,
        centerMode: true,
        asNavFor: '.slider-big',
        autoplaySpeed: 7000,
        pauseOnHover: false,
    });
    $('.slider-big').slick({
        fade: true,
        arrows: false,
        asNavFor: '.slider',
        autoplaySpeed: 7000,

    })
})