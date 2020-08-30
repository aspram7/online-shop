$(document).ready(function () {
    $(".languages-div").hover(function () {
        $(".languages-box").slideToggle("slow");
    });

    var languageChange = [
        { id: 0, flag: "armenian-flag.jpg", name: "Հայերեն" },
        { id: 1, flag: "russian-flag.jpg", name: "Русский" },
        { id: 2, flag: "the-united-kingdom-flag.jpg", name: "English" },
    ];

    $(".languages-box .language").click(function (e) {
        $(".languages-box .language").show();
        $(this).hide();

        const selectedItem = languageChange.find((item) => item.id == $(this).attr("key"));
        $(".languages-div > .language img").attr("src", "images/languages/" + selectedItem.flag);
        $(".languages-div > .language p").text(selectedItem.name);
    });

    $(".owl-carousel-1").owlCarousel({
        loop: true,
        nav: true,
        autoplay: 2000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
        },
    });

    $(".owl-carousel-2").owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 1000,
        margin: 15,
        responsive: {
            0: {
                items: 1,
            },
            479: {
                items: 2,
            },
            767: {
                items: 3,
            },
            991: {
                items: 4,
            },
            1300: {
                items: 5,
            },
        },
    });

    $(".owl-carousel-3").owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 1000,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            479: {
                items: 2,
            },
        },
    });

    $(".owl-carousel-4").owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    $(".owl-carousel-5").owlCarousel({
        loop: true,
        smartSpeed: 1000,
        autoplay: 2000,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
        },
    });

    $(".owl-carousel-6").owlCarousel({
        loop: true,
        smartSpeed: 1000,
        nav: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            991: {
                items: 3,
            },
        },
    });

    $(".menu-hamburger").click(function () {
        $(this).toggleClass("change");
        $(".mean-nav").slideToggle("slow");
    });

    $(".menu-items-toggle").click(function () {
        $(this).parent().next().slideToggle("fast");
        $(this).toggleClass("menu-items-toggle-close");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".scrollUp").fadeIn(100);
        } else {
            $(".scrollUp").fadeOut(100);
        }
    });

    $(".scrollUp").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 2000);
    });

    $(".action-view").click(function () {
        $(".modal").modal();
    });
});

function func(x) {
    window.location.href = x;
}
