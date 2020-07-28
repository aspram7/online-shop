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
                items: 2,
            },
        },
    });
});
