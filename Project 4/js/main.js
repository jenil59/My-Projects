$(document).ready(function() {
    $(".fa-bars").on("click", function() {
        $(".navbar").toggle();
        $(this).toggleClass("fa-times");
    })

    $(".navbar,.navbar a").click(function(e) {
        $('.navbar').hide();
        $(".fa-bars").removeClass("fa-times");

    });

    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: false

    });
    $('.review-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true

    });
    $('.product-slider').owlCarousel({
        loop: true,
        nav: true,

        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            300: {
                items: 1
            },
            550: {
                items: 2
            },

            1000: {
                items: 3
            }
        }

    });
    $('.brands-slider').owlCarousel({
        loop: true,
        nav: true,

        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2
            },
            550: {
                items: 3
            },

            1000: {
                items: 4
            }
        }

    })




})