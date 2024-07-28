$(document).ready(function () {
    AOS.init();
})

$(".container_mouse").click(function () {
    $('html, body').animate({
        scrollTop: $(".pembukaan").offset().top - 80
    }, 600);
});


$("#grafis").attr({ "data-aos": "fade-in", "data-aos-delay": "1500", "data-aos-duration": "800", "data-aos-easing": "linear" });