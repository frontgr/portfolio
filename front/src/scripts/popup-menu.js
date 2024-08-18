var menu_navigation = $("#popup--navigation");

$("#popup--button").on("click", function (e) {
    $(".top-menu__popup").show();
    if (!menu_navigation.is(":animated") && !menu_navigation.is(":visible")) {
        menu_navigation.fadeIn(0);
    }
});

$("#popup--button--close").on("click", function (e) {
    $(".top-menu__popup").hide();
    if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
        menu_navigation.fadeOut(0, function () {});
    }
});

$(window).resize(function () {
    if ($(window).width() > 998) {
        $(".top-menu__popup").hide();
    }
});

$(document).on("click", ".popup-anchor-link", function (e) {
    e.preventDefault();

    var targetAnchor = $(this).attr("href");

    if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
        menu_navigation.fadeOut(250, function () {
            $("html, body").animate(
                {
                    scrollTop: $(targetAnchor).offset().top,
                },
                300,
            );
        });
    }
});
