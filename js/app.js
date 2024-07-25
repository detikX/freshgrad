$(document).ready(function () {
    AOS.init();
})

$(".container_mouse").click(function () {
    $('html, body').animate({
        scrollTop: $(".pembukaan").offset().top - 80
    }, 600);
});
