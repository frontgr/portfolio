var menu_navigation = document.querySelector("#popup--navigation");

document.querySelector("#popup--button").on("click", function (e) { 
    if (!menu_navigation.is(":animated") && !menu_navigation.is(":visible")) {
        menu_navigation.fadeIn(500);
    }
});

document.querySelector("#popup--button--close").on("click", function (e) { 
    if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
        menu_navigation.fadeOut(500, function() {
        });
    }
});

document.querySelector(document).on("click", ".popup-anchor-link", function (e) {
    e.preventDefault();
    
    var targetAnchor = document.querySelector(this).attr("href");
    
    if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
        menu_navigation.fadeOut(250, function() {
            document.querySelector('html, body').animate({
                scrollTop: document.querySelector(targetAnchor).offset().top
            }, 300);
        });
    }
});



// var menu_navigation = $("#popup--navigation");

// $("#popup--button").on("click", function (e) { 
//     if (!menu_navigation.is(":animated") && !menu_navigation.is(":visible")) {
//         menu_navigation.fadeIn(500);
//     }
// });

// $("#popup--button--close").on("click", function (e) { 
//     if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
//         menu_navigation.fadeOut(500, function() {
//         });
//     }
// });

// $(document).on("click", ".popup-anchor-link", function (e) {
//     e.preventDefault();
    
//     var targetAnchor = $(this).attr("href");
    
//     if (!menu_navigation.is(":animated") && menu_navigation.is(":visible")) {
//         menu_navigation.fadeOut(250, function() {
//             $('html, body').animate({
//                 scrollTop: $(targetAnchor).offset().top
//             }, 300);
//         });
//     }
// });