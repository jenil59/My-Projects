jQuery(document).ready(function() {
    "use strict";
    $('#slidr-carousel').carouFredSel({
        responsive: true,
        width: '100%',
        circular: true,
        scroll: {
            items: 1,
            duration: 500,
            pauseOnHover: true
        },
        auto: true,
        items: {
            visible: {
                min: 1,
                max: 1
            },
            pagination: {
                container: ".sliderpager",
                pageAnchorBuilder: false
            }
        }
    })
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        console.log(top);
        if (top >= 100) {
            $('header').addClass("secondary");
        } else if ($('header').hasClass("secondary")) {
            $('header').removeClass("secondary");
        }
    })
});