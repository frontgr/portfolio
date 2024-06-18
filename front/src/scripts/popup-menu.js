var menu_navigation = $("#popup--navigation");

$("#popup--button").on("click", function (e) { 
    if (!menu_navigation.is(":animated") && !menu_navigation.is(":visible")) {
        menu_navigation.fadeIn(500);
    }
});

$("#popup--button--close").on("click", function (e) { 
    if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
        menu_navigation.fadeOut(500, function() {
        });
    }
});

$(document).on("click", ".popup-anchor-link", function (e) {
    e.preventDefault();
    
    var targetAnchor = $(this).attr("href");
    
    if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
        menu_navigation.fadeOut(250, function() {
            $('html, body').animate({
                scrollTop: $(targetAnchor).offset().top
            }, 300);
        });
    }
});
