$(document).ready(function () {
    let currentIndex = 0;
    const slides = $(".swiper-slide");
    const slider = $(".swiper-wrapper");
    const slideWidth = slides.width();
    const gap = parseInt($(".swiper-wrapper").css("gap"));

    $("#rightArrow").click(function () {
        if (window.innerWidth >= 1440 && slides.length <= 2) {
            slides.first().toggleClass("FirstCard");
        } else {
            currentIndex = (currentIndex + 1) % slides.length;
            slider.animate(
                { "margin-left": -(slideWidth + gap) * currentIndex },
                600,
            );
        }
    });

    $("#leftArrow").click(function () {
        if (window.innerWidth >= 1440 && slides.length <= 2) {
            slides.first().toggleClass("FirstCard");
        } else {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            slider.animate(
                { "margin-left": -(slideWidth + gap) * currentIndex },
                600,
            );
        }
    });
});
